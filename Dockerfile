# GermanBoost — static site served by nginx
FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="GermanBoost" \
      org.opencontainers.image.description="Offline German learning PWA (CEFR A1-C2)" \
      org.opencontainers.image.source="https://github.com/Cine-c/germanboost" \
      org.opencontainers.image.licenses="MIT"

# Custom server config (security headers, caching, SPA fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Serve only the site files (no .git, Dockerfile, README, etc.)
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY index.html manifest.json sw.js robots.txt sitemap.xml og-image.png ./
COPY css ./css
COPY js ./js
COPY icons ./icons

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

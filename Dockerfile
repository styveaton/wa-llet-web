FROM nginx:alpine
ENV TZ=America/New_York

COPY ./dist/wa-llet-web /usr/share/nginx/html

EXPOSE 80

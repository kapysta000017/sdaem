FROM node:19-alpine
WORKDIR /app

COPY package.json package.json
RUN npm install
COPY . .

CMD ["npm", "start"]
EXPOSE 3000-3001
FROM node
RUN npm install -g nodemon

# Working directory
WORKDIR /app

# Copy package.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Run app
CMD ["npm", "start"]
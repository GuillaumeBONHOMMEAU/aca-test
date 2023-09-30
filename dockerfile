# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /docker-app-folder

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli
# Install app dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Angular app
RUN ng build

EXPOSE 80

# Start the Angular app
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]
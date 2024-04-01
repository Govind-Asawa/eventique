# # Use an official Node runtime as a parent image
# FROM node:20.9.0

# # Set work directory
# WORKDIR /

# # Add `/app/node_modules/.bin` to $PATH
# ENV PATH /node_modules/.bin:$PATH

# # Install app dependencies
# COPY package.json /app/
# COPY package-lock.json /app/
# RUN npm install

# # Copy project
# COPY . /

# # Build the app
# RUN npm run build

# # Install serve and serve the build
# RUN npm install -g serve
# CMD ["serve", "-s", "build", "-l", "3000"]

# # Expose the port the app runs on
# EXPOSE 3000

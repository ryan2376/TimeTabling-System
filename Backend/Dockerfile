# Use an official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Prevent npm prompts and extra logs
ENV CI=true

# Copy only package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start dev server using ts-node-dev
CMD ["npm", "run", "dev"]

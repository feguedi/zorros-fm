# Use an official Node.js, and it should be version 16 and above
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
# COPY pnpm-lock.yaml package.json ./

# Install app dependencies using PNPM
# RUN npm install -g pnpm
RUN npm install -g pm2

# Install dependencies
# RUN pnpm install

# Copy the application code 
COPY ./.output .
COPY ./.env .
COPY ./ecosystem.config.cjs .

# Build the TypeScript code
# RUN pnpm build

# Expose the app
EXPOSE 3030

# Start the application
CMD ["pm2", "start", "ecosystem.config.cjs"]

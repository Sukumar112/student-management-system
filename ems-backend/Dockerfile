# Use OpenJDK 17 as the base image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy only necessary backend files into the container
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Make mvnw executable
RUN chmod +x mvnw

# Build the app (skip tests for speed)
RUN ./mvnw clean package -DskipTests

# Expose port (change if needed)
EXPOSE 10000

# Run the built Spring Boot jar
CMD ["sh", "-c", "java -jar target/*.jar"]

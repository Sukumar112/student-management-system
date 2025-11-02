# Use OpenJDK 17 as the base image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the Maven/Gradle files (whichever you’re using)
COPY . .

# Build the app using Maven
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests


# Expose port 10000 (Render will map this dynamically)
EXPOSE 10000

# Run the Spring Boot jar
CMD ["java", "-jar", "target/*.jar"]

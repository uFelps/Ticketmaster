FROM maven:3.8.3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17
COPY --from=build /target/backend-0.0.1-SNAPSHOT.jar demo.jar
VOLUME /tmp
EXPOSE 8080
ENTRYPOINT ["java","-jar","/demo.jar"]
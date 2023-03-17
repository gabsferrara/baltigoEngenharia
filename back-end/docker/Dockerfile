FROM golang:1.16

WORKDIR /go/src
ENV PATH="/go/bin:${PATH}"

RUN apt-get update && \
    apt-get install build-essential librdkafka-dev -y

CMD ["tail", "-f", "/dev/null"]


# FROM golang:1.17

# WORKDIR /app

# COPY go.mod go.sum ./
# RUN go mod tidy

# COPY app/ .

# RUN go build -o main .

# EXPOSE 8080

# CMD ["./main"]
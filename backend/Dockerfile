# Use an official Python runtime as a parent image
FROM python:3.11.5

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /api_server/api_server

# Install system dependencies
RUN apt-get update

COPY . .

# # Install Python dependencies
# COPY ./requirements.txt /api_server/
RUN pip install --upgrade pip && pip install -r requirements.txt

# # Copy project
# COPY . /api_server/

RUN python api_server/manage.py makemigrations; \
    python api_server/manage.py migrate; 
    #\
    # chown -R appuser:appuser /app

# Expose the port the app runs on
EXPOSE 8000

# Command to run the server
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "api_server.wsgi:application"]

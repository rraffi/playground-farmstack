# Docker, image and container
FROM python:3.9

WORKDIR /python-farmstack

COPY requirements.txt .
RUN pip install -r requirements.txt

# Do not have to create a virtual env in docker, because docker is a virtual env?
# RUN pipenv shell

COPY ./backend ./backend

CMD [ "python", "./backend/main.py"]


# from google.cloud import tasks_v2
# from google.protobuf import timestamp_pb2
# import datetime

# def create_task(project, queue, location, url, schedule_datetime, payload=None, in_seconds=None):
#     # Create a client for Cloud Tasks
#     client = tasks_v2.CloudTasksClient()

#     # Construct the fully qualified queue name.
#     parent = client.queue_path(project, location, queue)

#     # Construct the request body.
#     task = {
#         'http_request': {
#             'http_method': 'POST',
#             'url': url  # The URL of the Cloud Function
#         }
#     }

#     if payload:
#         # The API expects a payload of type bytes.
#         converted_payload = payload.encode()
#         task['http_request']['body'] = converted_payload

#     if in_seconds:
#         # Convert "in_seconds" to a datetime.timedelta
#         d = datetime.datetime.now(datetime.UTC) + datetime.timedelta(seconds=in_seconds)
#         timestamp = timestamp_pb2.Timestamp()
#         timestamp.FromDatetime(d)
#         # Add the schedule time to the task
#         task['schedule_time'] = timestamp
    
#     if schedule_datetime:
#         timestamp = timestamp_pb2.Timestamp()
#         timestamp.FromDatetime()
#         task['schedule_time'] = timestamp.FromDatetime(schedule_datetime)

#     # Create the task.
#     response = client.create_task(parent=parent, task=task)
#     print('Task created: {}'.format(response.name))



# # Example usage
# create_task(
#     project='bamboo-theorem-415222',
#     queue='email-queue',
#     location='us-central1',
#     url='https://us-central1-bamboo-theorem-415222.cloudfunctions.net/send_email',
#     payload='{"recipient":"regostar006@gmail.com", "subject":"Hello!", "content":"This is a test."}',
#     in_seconds=120  # Schedule the task to run 2 minutes later
# )

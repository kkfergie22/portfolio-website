from django.db import models


# Create your models here.
class Project(models.Model):
    def __str__(self) -> str:
        return self.title

    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    upload_date = models.DateTimeField("date uploaded")

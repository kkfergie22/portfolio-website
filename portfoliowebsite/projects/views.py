from typing import Any
from django.db.models.query import QuerySet
from django.views import generic
from .models import Project


# Create your views here.
class IndexView(generic.ListView):
    template_name = "projects/index.html"
    context_object_name = "latest_project_list"

    def get_queryset(self) -> QuerySet[Any]:
        return Project.objects.order_by("-upload_date")


class DetailView(generic.DetailView):
    template_name = "projects/project_detail.html"
    Model = Project

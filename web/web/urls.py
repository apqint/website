from django.urls import include, path

urlpatterns = [
    path("", include("public.urls")),
    path("api/", include("api.urls"))
]

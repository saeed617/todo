from django.conf.urls import url
from . import views

from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^posts/$', views.PostList.as_view(), name='post_list'),
    url(r'^post/(?P<pk>\d+)/$', views.PostDetail.as_view(), name='post_detail'),
    url(r'^users/$', views.UserList.as_view(), name='user_list'),
    url(r'^user/(?P<pk>\d+)/$', views.UserDetail.as_view(), name='user_detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)

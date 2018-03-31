from rest_framework import serializers
from django.contrib.auth.models import User
from blog import models


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = models.Post
        fields = ('id', 'title', 'body', 'created', 'updated', 'author')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    posts = serializers.HyperlinkedRelatedField(many=True, view_name='api:post_detail', read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'posts')

# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-07-10 19:31
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_follow'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='saved_users',
        ),
    ]

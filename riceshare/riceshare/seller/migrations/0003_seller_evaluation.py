# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-05-23 01:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seller', '0002_auto_20170523_0145'),
    ]

    operations = [
        migrations.AddField(
            model_name='seller',
            name='evaluation',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]

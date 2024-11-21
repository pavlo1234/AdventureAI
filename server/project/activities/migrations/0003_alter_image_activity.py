# Generated by Django 5.1.2 on 2024-11-20 18:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activities', '0002_rename_ac_type_activity_kind'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='activity',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='activities.activity'),
        ),
    ]

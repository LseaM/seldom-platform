# Generated by Django 4.0.6 on 2022-09-18 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_task', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reportdetails',
            name='skipped_msg',
        ),
        migrations.AddField(
            model_name='testtask',
            name='execute_count',
            field=models.IntegerField(default=0, null=True, verbose_name='执行次数'),
        ),
    ]
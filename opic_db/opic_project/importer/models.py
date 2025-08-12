from django.db import models

class Part(models.Model):
    id = models.IntegerField(primary_key=True)

    def __str__(self):
        return f"Part {self.id}"

class Level(models.Model):
    id = models.IntegerField(primary_key=True)

    def __str__(self):
        return f"Level {self.id}"

class Condition(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Question(models.Model):
    part = models.ForeignKey(Part, on_delete=models.CASCADE, related_name='questions')
    level = models.ForeignKey(Level, on_delete=models.CASCADE, related_name='questions')
    condition = models.ForeignKey(Condition, on_delete=models.CASCADE, related_name='questions')
    
    question_kr = models.TextField()
    question_en = models.TextField()

    def __str__(self):
        return f"Q: {self.question_kr[:30]}..."
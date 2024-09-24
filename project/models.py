from django.db import models

class PortfolioItem(models.Model):
    title = models.CharField(max_length=100)  # Optional: Title for the project
    image = models.ImageField(upload_to='portfolio_images/')
    link = models.URLField(max_length=200)  # Link to the project

    def __str__(self):
        return self.title

import os
import django
from django.urls import get_resolver

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'UniversityHub.settings')
django.setup()
resolver = get_resolver()
print('ROOT PATTERNS:')
for pattern in resolver.url_patterns:
    print(pattern)
    if hasattr(pattern, 'url_patterns'):
        print('SUBPATTERNS:')
        for sub in pattern.url_patterns:
            print('  ', sub)

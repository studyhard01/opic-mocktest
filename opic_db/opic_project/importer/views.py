import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import transaction
from .models import Part, Level, Condition, Question

@csrf_exempt
@transaction.atomic
def import_json_view(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'POST method required.'}, status=405)

    try:
        data = json.loads(request.body)
        
        for item in data:
            part_obj, _  = Part.objects.get_or_create(id=item['part'])
            level_obj, _ = Level.objects.get_or_create(id=item['level'])
            condition_obj, _ = Condition.objects.get_or_create(name=item['condition'])
            
            Question.objects.create(
                part=part_obj,
                level=level_obj,
                condition=condition_obj,
                question_kr=item['question_kr'],
                question_en=item['question_en'],
            )
        return JsonResponse({'message': f'{len(data)} question is loaded successfully.'})
    
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid .json format.'}, status=406)
    except Exception as e:
        return JsonResponse({'error': f'Server Error: {str(e)}'}, status=500)
<?php
function getSchema()
{
    return [
        'services' => [
            'menuName' => 'Слайдер услуги',
            'fields' => [
                'title' => [
                    'name' => 'Выберите услугу',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["Лазерная эпиляция", "Шугаринг", "Восковая депиляция"],
                    'selectOne' => true,
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинки услуги',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'slider' => [
            'menuName' => 'Выпускники',
            'fields' => [
                'title' => [
                    'name' => 'Имя выпускника',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],
                'year' => [
                    'name' => 'Опыт работы',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],
                'description' => [
                    'name' => 'Описание',
                    'element' => 'input',
                    'type' => 'textarea',
                    'required' => true,
                ],
                'img' => [
                    'name' => 'Фото выпускника',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'feed' => [
            'menuName' => 'Отзывы',
            'fields' => [
                'title' => [
                    'name' => 'ФИО',
                    'element' => 'input',
                    'type' => 'text',
                   'required' => true,
                ],

                'text' => [
                    'name' => 'Текст отзыва',
                    'element' => 'textarea',
                    'type' => 'text',
                   'required' => true,
                ],

                'img' => [
                    'name' => 'Фотография',
                    'element' => 'input',
                    'type' => 'file',
                   'required' => true,
                ],
            ]
        ]
        
       
    ];
}
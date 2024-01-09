<?php
function getSchema()
{
    return [
        'services' => [
            'menuName' => 'Услуги',
            'fields' => [
                'title' => [
                    'name' => 'Заголовок услуги',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'text' => [
                    'name' => 'Текст услуги',
                    'element' => 'textarea',
                    'type' => 'text',
                    'required' => true,
                ],

                'price' => [
                    'name' => 'Цена услуги',
                    'element' => 'input',
                    'type' => 'number',
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
        'pricelist' => [
            'menuName' => 'Прайс лист',
            'fields' => [
                'title' => [
                    'name' => 'Выбор услуги',
                    'element' => 'select',
                    'options' => 'services',
                    'required' => true,
                ],

                'name' => [
                    'name' => 'Название',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],
                'type' => [
                    'name' => 'Тип',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],
                'price' => [
                    'name' => 'Цена',
                    'element' => 'input',
                    'type' => 'number',
                    'required' => true,
                ],
            ],
        ],
        'shares' => [
            'menuName' => 'Акции',
            'fields' => [
                'title' => [
                    'name' => 'Заголовок акции',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'oldprice' => [
                    'name' => 'Старая цена',
                    'element' => 'input',
                    'type' => 'number',
                    'required' => true,
                ],
                'newprice' => [
                    'name' => 'Новая цена',
                    'element' => 'input',
                    'type' => 'number',
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинка акции',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],
        'galery' => [
            'menuName' => 'Фотографии',
            'fields' => [                
                'tags_next' => [
                    'name' => 'Теги картинок',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["Эстетическая трихология", "Стрижка мужская", "Стрижка женская", "Стрижка детская", "СПА уходовые процедуры", "Окрашивание", "Биозавивка", "Патронажная услуга"],
                    'selectOne' => true,
                    'required' => false,
                ],

                'img' => [
                    'name' => 'Картинки для галереи',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],
        'comment' => [
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
            ],
        ],
        
    ];
}
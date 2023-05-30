---
sidebar_position: 2
sidebar_label: 'Шаблонизатор PROScript'
---

# Шаблонизатор PROScript

## Брошенная корзина

Данные о корзине можно получить следующей функцией:

```html
[% basket_list = ssecquery('basket') %]
```

Данные о корзине придут в шаблонизатор в объекте:

<!-- prettier-ignore -->
```js
{
 "transaction_id" => "x1",
 "transaction_dt" => "2022-07-25 23:25:13",
 "items" => [
    { запись ssec },
    { запись ssec },
    { запись ssec }
 ]
}
```

Если вы передаете метаданные о товаре (название, ссылка и т.д.) в событии, то вам не нужно использовать данные о товарах из вашего YML-файла.

Чтобы вывести информацию о всех товарах в корзине можно использовать код:

```html
[% basket_list = ssecquery('basket') %] [% FOREACH item in basket_list[0].items %] [%
item.product.name %] [% item.product.model %] Цена: [% item.product.price %] руб. Количество: [%
item.product.qnt %] шт Сумма: [% item.product.price*item.product.qnt %] руб. [% END %]
```

## Брошенный просмотр

Для вывода содержимого в рассылках сценария «Брошенный просмотр» используем данные событий «просмотр карточки товара»:

```html
[% product_view_list = ssecquery('product_view') %]
```

Данные о каждом товаре придут в виде объекта, содержащего все поля.
Если вы передаете метаданные о товаре (название, ссылка и т.д.) в событии, то вам не нужно использовать данные о товарах из вашего YML-файла.
В результате работы функции вы получите 100 последних событий. Вы можете задать временные рамки запрашиваемых событий:

```html
[% ssecquery('product_view','dt','>','current - 1 day') %]
```

Также вы можете ограничить число отображаемых событий (товаров) напрямую в шаблоне:

```html
[% product_view_list = ssecquery('product_view') %] [% FOREACH item in product_view_list %] [%
item.product.name %] [% item.product.model %] Цена: [% item.product.price %] руб. [% LAST IF
loop.count() == 3 %] [% END %]
```

## Брошенная категория

Для вывода содержимого в рассылках сценария «Брошенный просмотр категории» используем список последних посещенных страниц категорий товаров:

```html
[% category_view_list = ssecquery('category_view') %]
```

Данные о каждой категории придут в виде объекта, содержащего все поля, которые вы передавали в событии.
В результате работы функции вы получите 100 последних событий. Вы можете задать временные рамки запрашиваемых событий:

```html
[% ssecquery('category_view','dt','>','current - 1 day') %]
```

## Самые продаваемые товары (по количеству)

```html
[% bestseller_count = ssecquery('bestseller_count') %]
```

Ответ приходит в виде массива объектов. Разбираем с помощью FOREACH:

```html
[% bestseller_count = ssecquery('bestseller_count') %] [% FOREACH item in bestseller_count %] [%
item.product.name %] [% item.product.model %] Цена: [% item.product.price %] руб. [% LAST IF
loop.count() == 3 %] [% END %]
```

Функция поддерживает фильтры по любым доступным полям в данных о товаре.
С фильтром по периоду расчета:

```html
[% bestseller_count = ssecquery('bestseller_count','dt','>','current - 180 days') %]
```

С фильтром по категории:

```html
[% bestseller_count = ssecquery('bestseller_count',,'category','in',['photo','video']) %]
```

## Самые продаваемые товары (по выручке)

```html
[% bestseller_money = ssecquery('bestseller_money') %]
```

Функция поддерживает фильтры по любым доступным полям в данных о товаре.

## Самые посещаемые товары

```html
[% eyecatcher = ssecquery('eyecatcher') %]
```

Функция поддерживает фильтры по любым доступным полям в данных о товаре.

## Персонализация шаблона выпуска на основе данных из сегмента

Вам может понадобиться обратиться в шаблоне письма к данным событий, которые вызвали попадание пользователя в сегмент выпуска.

Для этого:

- первым элементом сегмента должен быть условие по событиям модуля **Продажи** (`stat.uni` по `ssec_*`). Именно его совпавшие строки используются для передачи в переменную `anketa.ssec_*`,
- в условиях сегмента могут быть другие условия `stat.uni`/`!stat.uni с ssec_*` - они дадут только дополнительную фильтрацию, но не данные для персонализации.

Для доступа к данным в шаблоне письма используем переменные:

```html
[% anketa.ssec_order %] [% anketa.ssec_category_view %] [% anketa.ssec_basket %] [%
anketa.ssec_product_view %] [% anketa.ssec_product_search %] [% anketa.ssec_product_price %] [%
anketa.ssec_product_isa %] [% anketa.ssec_product_favorite %] [% anketa.ssec_product_preorder %]
```

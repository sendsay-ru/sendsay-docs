---
sidebar_position: 2
---

# Что такое сегмент контактов
Списки и сегменты — основной инструмент для работы с аудиторией в Sendsay: с их помощью можно разбивать базу на аудитории и работать с ними по отдельности. Это позволяет учитывать потребности и интересы подписчиков при создании предложений, а не отправлять всем одно письмо.

Сегмент (в предыдущем интерфейсе группа-фильтр) — это группа контактов одного типа, где вы настраиваете условия, и контакты отбираются автоматически. Все сегменты хранятся в разделе **Подписчики → Сегменты**. 

Один контакт может как входить сразу в неограниченное количество списков и сегментов, так и не попадать ни в один из них. В сегменте рядом с кнопкой «Создать выпуск» есть выпадающее меню — там можно:
- экспортировать контакты в файл формата .csv или .xls,
- удалить все контакты из базы,
- отправить неподтверждённым email-контактам письма подтверждения,
- активировать неподтверждённые email-контакты.

![What is segment](./assets\what-is-segment/what-is-segment.png) <br/>

## Как создать сегмент
1. Зайдите в раздел **Подписчики → Сегменты**.
2. Нажмите на синюю кнопку «Создать сегмент».
3. Введите название и выберите тип контактов в списке:
    - email,
    - телефон,
    - CSID — это дополнительный идентификатор подписчика, который позволяет связать данные в Sendsay с данными во внешней системе,
    - web push — это числовой идентификатор, который создаётся, когда посетитель сайта подписывается на пуш-рассылку.
4. Нажмите «Создать сегмент».

![How to create a segment](./assets\what-is-segment/how-to-create-a-segment.gif) <br/>

## Как настроить сегмент
Состав участников в сегменте определяется условиями — чтобы их задать, в разделе **Подписчики → Сегменты** откройте нужный сегмент и перейдите во вкладку **Настройки сегмента**.

### 1. Настройте условия
Для начала нужно определить, кто попадёт в сегмент:
- подписчики, которые соответствуют (или не соответствуют) каждому условию из сегмента (то есть всем из списка одновременно),
- подписчики, которые соответствуют (или не соответствуют) любому условию из сегмента (хотя бы одному из списка).

![How to set conditions in a segment](./assets\what-is-segment/how-to-set-conditions-in-a-segment.png) <br/>

Условия задаются по строкам, всего их может быть сколько угодно. Условия можно объединять в группы — для этого нужно нажать на три точки слева от строки и нажать «Добавить группу условий».

![How to create a group of conditions](./assets\what-is-segment/how-to-create-a-group-of-conditions.png) <br/>

Для группы условий также можно указать, в каком случае вложенные условия будут считаться выполненными, — если подписчик соответствует (или не соответствует) всем условиям в группе или хотя бы одному из них.

![Group of conditions](./assets\what-is-segment/group-of-conditions.png) <br/>

Чтобы выбрать условие, откройте первое выпадающее меню в строке. Есть несколько условий:
1. Участие в списке или сегменте.
2. Заполнение формы или опроса.
3. Действия по выпуску:
    - был ли подписчик получателем выпуска (то есть выпуск был отправлен, но мог не дойти до ящика адресата),
    - получил ли выпуск (то есть выпуск был отправлен и попал во входящие),
    - открыл ли выпуск,
    - переходил ли по ссылкам в письме.
4. Наличие или отсутствие данных.

Также условия можно скопировать из другого сегмента (последний пункт в выпадающем списке) — они добавятся в новый сегмент в виде группы условий.

В качестве примера составим условия и значение для сегмента подписчиков из Москвы. В этом случае нам нужно задать два условия, чтобы объединить людей, у которых в городе указана «Москва» и «москва», так как заглавные и строчные буквы считаются за разные символы.

1. В первой строчке выберите, чтобы в сегмент попали подписчики, которые соответствуют любому из условий. 
2. Добавьте условие:
```
имеет данные → город → равно → Москва
```
3. Нажмите на плюсик на новой строке, чтобы добавить условие:
```
имеет данные → город → равно → москва
```
4. Нажмите «Сохранить».

![How to create a condition](./assets\what-is-segment/how-to-create-a-condition.gif) <br/>

### 2. Проверьте участников сегмента
При настройке сегмента можно проверить, правильно ли составлены условия — для этого нужно нажать на кнопку «Действия» и выбрать один из вариантов:

#### Посмотреть пример аудитории
В этом случае редактор выведет трёх подписчиков, попадающие под условия на экране.

![Audience sample](./assets\what-is-segment/audience-sample.gif) <br/>

#### Попадает ли в сегмент конкретный адрес
Введите контакт подписчика — и если он не попадает в сегмент, редактор покажет, под какое условие он не подходит.

![Test if contact enters the segment](./assets\what-is-segment/test-if-contact-enters-the-segment.gif) <br/>

Если под условия не попадает ни один подписчик, сегмент будет оставаться пустым, пока не изменятся данные у подписчиков или сами условия.

После добавления и проверки условий нажмите «Сохранить».

## Примеры условий для сегментов
### Сегмент именинников для рассылки поздравлений
Условие:
```
имеет данные → дата рождения → равно → дата и время
```
У параметра «Дата и время» при этом можно для удобства поменять формат, оставив только месяц и число. В конце сохраните сегмент.

![Segment for birthday](./assets\what-is-segment/segment-for-birthday.gif) <br/>

### Сегмент неактивных подписчиков
В этом случае нужно отобрать всех подписчиков, которые получали ваши рассылки за конкретный период времени (например, за месяц), и среди них выбрать тех, кто не открывал письма:

В сегмент попадут подписчики, которые соответствуют каждому из условий:
```
получал выпуск → любой выпуск → за последние N дней → за 30 дней
```
Затем нажмите на плюсик на новой строке, чтобы добавить условие:
```
не открывал выпуск → любой выпуск → за последние N дней → за 30 дней
```
В конце сохраните сегмент.

![Segment for inactive subscribers](./assets\what-is-segment/segment-for-inactive-subscribers.gif) <br/>
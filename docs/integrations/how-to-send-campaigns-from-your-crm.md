---
sidebar_position: 5
---

# Как отправлять рассылки из своей CRM-системы

Выпуски не обязательно создавать в интерфейсе Sendsay — содержимое и параметры рассылок можно настраивать в собственной системе, а уже потом присылать нам. Важно выбрать правильный способ для передачи информации, иначе рассылка может отправляться в разы дольше обычного.

Способ рассылки зависит от того, можете ли вы подготовить список получателей — файл со всеми адресатами выпуска, который формируется до начала рассылки.

## Если у вас есть список получателей
Список получателей нужен для всех массовых рассылок, когда в назначенное время письма уходят сразу большой аудитории. В этом случае есть два варианта выпуска:
- экспресс-выпуск — информация передаётся через API-запрос,
- FTP-выпуск — информация передаётся через FTP-сервер (чтобы получить к нему доступ, напишите в службу поддержки).

## Если списка получателей нет, а писем много
Бывает, что внутренняя система не может сразу определить всех адресатов рассылки, так как генерирует письма по одному — но из-за большого количества получателей письма отправляются ежесекундно по несколько штук. Тогда используются другие типы выпусков:
- потоковое API (способ подходит для рассылок объёмом больше пяти тысяч писем в секунду),
- SMTP-выпуск — информация передаётся через выделенный SMTP-гейт.

Оба способа настраиваются через службу поддержки.

## Если списка получателей нет и писем мало
В этом случае можно рассылать только транзакционные письма — это сообщения с персональной информацией, которые отправляются в ответ на действие пользователя (например, письма после регистрации или покупки). Вся информация передаётся через API и обрабатывается по одному письму в секунду, поэтому способ подходит только для рассылок небольших объёмов.
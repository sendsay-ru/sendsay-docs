---
sidebar_position: 7
---

# Стоп-листы
Стоп-листы — это списки контактов, которые исключаются из всех рассылок. В них хранятся все отписавшиеся самостоятельно и добавленные вами email-адреса и телефонные номера.

Все стоп-листы находятся в разделе **Подписчики → Стоп-листы**.

## Какие бывают стоп-листы
По умолчанию в Sendsay есть два системных стоп-листа, которые нельзя удалить или переименовать (при этом один контакт может одновременно находиться в обоих). 

**Отписались от всех рассылок** — сюда попадают контакты, которые самостоятельно отказались от ваших писем. Адреса из этого стоп-листа нельзя удалять вручную или через API, поэтому они станут доступны для рассылок, только когда их владельцы переподпишутся на вас. Также сюда можно добавить адреса отписавшихся при переезде в Sendsay из другого сервиса рассылок.

**Заблокированы вручную** — здесь находятся контакты, которые были отписаны вами от всех рассылок вручную или по API-запросу из внешних систем (этот способ настраивается дополнительно). Пока адрес находится в этом стоп-листе, ему не будет ничего приходить, даже если его владелец переподпишется на вас.

## Дополнительные настройки
Есть две дополнительные настройки: стоп-лист по отправителю и игнорирование стоп-листа. Они подключаются через службу поддержки. Для этого напишите нам в чат — подробно расскажите, чем занимается ваша компания и как вам помогут настройки в работе. Мы очень внимательно рассматриваем заявления, чтобы не пропускать спам.

### 1. Стоп-лист по отправителю
Если вы отправляете рассылки с разных адресов (например, отдельно маркетинговые письма и отдельно информационные), можно настроить стоп-лист по отправителю. В этом случае отписавшиеся будут так же попадать в одноимённый стоп-лист, но сервис не будет исключать их из всех рассылок — только от конкретного отправителя. Письма от остальных будут продолжать приходить.

:::tip Важно
Все адреса, которые попали в стоп-лист до разделения по отправителям, будут по-прежнему недоступны для любых рассылок.
:::

### 2. Игнорирование стоп-листа
Стоп-лист можно игнорировать — это даёт возможность отправлять транзакционные письма (например, с восстановлением пароля или со статусом заказа) подписчикам, которые отписались от массовых рассылок.

## Как добавить контакты в стоп-лист
Зайдите в раздел **Подписчики → Стоп-листы** и откройте нужный стоп-лист.

Нажмите синюю кнопку «Добавить в стоп-лист» и вставьте список контактов в форму.

:::tip Важно
Если вы добавляете контакты в стоп-лист, в базу их загружать необязательно. 
:::

![How to add contacts to stop list](./assets\stop-lists/how-to-add-contacts-to-stop-list.gif) <br/>

## Как удалить контакты из стоп-листа
1. Зайдите в раздел **Подписчики → Стоп-листы** и откройте стоп-лист «Заблокированы вручную».
2. Если нужно удалить конкретные контакты, поставьте галочки рядом с теми, кому хотите снова отправлять рассылки. В выпадающем сером меню над списком контактов нажмите «Удалить из стоп-листа».

![How to delete contacts from stop list](./assets\stop-lists/how-to-delete-contacts-from-stop-list.png) <br/>

Если вы хотите удалить все контакты из стоп-листа, откройте синее выпадающее меню над списком контактов и нажмите «Очистить стоп-лист».

![How to clear stop list](./assets\stop-lists/how-to-clear-stop-list.png) <br/>

:::tip Важно
Удаление контакта из базы не удаляет его из стоп-листа — даже если владелец контакта переподпишется на вас, он всё равно будет исключаться из рассылок. Если контакт был удалён из базы, но остался в стоп-листе, при тарификации он не будет учитываться.
:::
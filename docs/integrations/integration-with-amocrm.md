---
sidebar_position: 4
---
import amocrmLink from "./assets/integration-with-amocrm/amocrm-link.png";
import amocrmSubdomain from "./assets/integration-with-amocrm/amocrm-subdomain.png";

# Интеграция с amoCRM

## Как подключить аккаунт
### 1. Создайте интеграцию в Sendsay
1. Перейдите [в предыдущий интерфейс](https://sendsay.ru/account/).
2. Откройте раздел **Подписчики → Интеграции** и выберите пункт **amoCRM**.

![How to create integration with amoCRM](./assets\integration-with-amocrm/how-to-create-integration-with-amocrm.gif) <br/>

### 2. Получите в Sendsay ссылку подключения аккаунта
После создания интеграции откроется страница настроек. Нажмите «Подключить аккаунт» и скопируйте ссылку для интеграции (она действительна 20 минут):

<p align="center">
    <img src={amocrmLink} alt="amoCRM link" />
</p>

Не закрывайте это окно — здесь нужно будет заполнить остальные поля для подключения.

### 3. Создайте интеграцию в amoCRM
В соседней вкладке войдите в аккаунт amoCRM и создайте интеграцию:
1. В аккаунте amoCRM откройте раздел **Настройки → Интеграции** и нажмите «Создать интеграцию».
2. Во всплывающем окне нажмите «Создать» рядом с пунктом **Внешняя интеграция**.
3. В поле «Ссылка для перенаправления» вставьте ссылку интеграции из Sendsay.
4. Поставьте галочку в чекбоксе «Предоставить доступ: Все».
5. Введите название интеграции и описание.
6. Нажмите «Сохранить».

![Integration in amoCRM](./assets\integration-with-amocrm/integration-in-amocrm.gif) <br/>

### 4. Скопируйте данные для настройки интеграции в Sendsay
1. На странице интеграции перейдите во вкладку **Ключи и доступы**.
2. Скопируйте секретный ключ, нажав на два прямоугольника справа, и вставьте его в соответствующее поле на странице интеграции в Sendsay.
3. По очереди скопируйте ID интеграции и код авторизации в Sendsay.
4. Скопируйте поддомен из адреса вашего amoCRM в адресной строке:

<p align="center">
    <img src={amocrmSubdomain} alt="amoCRM subdomain" />
</p>

5. Нажмите «Создать авторизацию».

## Как настроить импорт данных из amoCRM в Sendsay
На странице интеграции откройте вкладку «Импорт из amoCRM» и укажите настройки для загрузки контактов.

### Выберите список для подписчиков
Вы можете создать новый список, выбрать существующий или просто загрузить контакты в базу. Рекомендуем загружать контакты из сторонних систем в списки, чтобы в дальнейшем с ними можно было работать отдельно.

### Выберите переменные для загрузки
Поставьте галочки рядом с данными, которые вы хотите импортировать (почта загружается по умолчанию):
- имя и фамилия (они импортируются в одно поле — «Имя»),
- телефон — его можно импортировать как дополнительный контакт, чтобы отправлять смс-рассылки, или в другое поле в анкете.

### Загрузите контакты или создайте действие по расписанию
Есть два варианта загрузки контактов:

**1. Импортировать один раз** — для этого нужно нажать «Загрузить адреса из AmoCRM».

**2. Настроить автоматический импорт.** Для этого нажмите «Создать автоимпорт», введите название и нажмите «Создать автоимпорт» ещё раз. Это сгенерирует и активирует действие по расписанию — контакты будут импортироваться ежедневно в 00:00 по московскому времени. Чтобы изменить настройки, нажмите на автоимпорт — откроется страница с параметрами загрузки.

:::tip Важно
Не создавайте список при настройке автоматического импорта, иначе при каждой загрузке контактов список будет дублироваться
:::

## Как передавать контакты из amoCRM в список или в автоматизацию
Если автоимпорт позволяет загружать данные максимум несколько раз в сутки, то адреса электронных почт (без остальной информации) можно передавать в Sensday сразу после того, как они появляются или редактируются в amoCRM. Их можно либо отправлять на автоматизацию, либо добавлять в список. Рассмотрим оба варианта.

### Как отправлять подписчиков из amoCRM на автоматизацию
1. На страницу интеграции в Sendsay перейдите во вкладку **Webhooks**.
2. Выберите автоматизацию, на которую вы хотите отправлять контакты из amoCRM, и нажмите «Сгенерировать ссылку». Скопируйте ссылку.
3. В аккаунте amoCRM откройте раздел **Настройки → Интеграции** и нажмите «Web hooks».
4. Нажмите «Добавить хук» и вставьте ссылку в левое поле. В правом поле выберите событие, при котором подписчик отправится на автоматизацию — подходят только два пункта, «Контакт добавлен» или «Контакт изменён» (можно выбрать оба сразу).
5. Нажмите «Сохранить».

![From amoCRM into automation](./assets\integration-with-amocrm/from-amocrm-into-automation.gif) <br/>

### Как добавлять подписчиков из amoCRM в список
1. На страницу интеграции в Sendsay перейдите во вкладку **Webhooks**.
2. Выберите список, в который будут добавляться новые контакты из amoCRM, и нажмите «Сгенерировать ссылку». Скопируйте ссылку.
3. В аккаунте amoCRM откройте раздел **Настройки → Интеграции** и нажмите «Web hooks».
4. Нажмите «Добавить хук» и вставьте ссылку в левое поле. В правом поле выберите событие, при котором подписчик отправится на автоматизацию — подходит только один пункт, «Контакт добавлен».
5. Нажмите «Сохранить».

![From amoCRM into list](./assets\integration-with-amocrm/from-amocrm-into-list.gif) <br/>

## Как отправлять пользователей из воронки на автоматизацию
Сейчас эта опция недоступна, но мы работаем над ней.
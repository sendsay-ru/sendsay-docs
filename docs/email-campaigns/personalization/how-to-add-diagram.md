---
sidebar_position: 7
sidebar_label: 'Вставка круговой диаграммы'
---

import diagram from "/img/email-campaigns/personalization//how-to-add-diagram/diagram.png";

# Как вставить в письмо круговую диаграмму

Диаграмма генерируется на основе данных подписчика и представляет собой поделенный на части круг с секторами разного размера. Для примера рассмотрим диаграмму, которая сравнивает доли рынка разных стран:

<p align="center">
    <img src={diagram} alt="Diagram" />
</p>

Диаграмма создаётся в три этапа:

## 1. Создайте поле для хранения координат

Все данные для диаграммы должны храниться в одном поле, поэтому первым делом нужно его создать:

1. В разделе **Подписчики → Анкеты** откройте любую анкету и нажмите «Добавить поле». Обратите внимание, что в системной и базовой анкетах нельзя создавать поля, а в дополнительной анкете мы рекомендуем хранить поля только для социально-демографических данных.
2. Введите название поля, выберите тип «Свободный ввод» и нажмите «Добавить».

Когда поле появится в анкете, скопируйте себе код справа от него — он выглядит вот так: `[% anketa.custom.data %]`. Его нужно будет указать при добавлении диаграммы в письмо.

## 2. Импортируйте значения для диаграммы

Есть два формата записи координат (для наглядности значения каждого сектора выделены тем же цветом, что и сам сектор на диаграмме):

**Запись по строкам (формат bygraph)**<br/>
![Bygraph format](/img/email-campaigns/personalization//how-to-add-diagram/bygraph-format.png) <br/>

**Запись по столбцам (формат bypoint)**<br/>
![Bypoint-format](/img/email-campaigns/personalization//how-to-add-diagram/bypoint-format.png) <br/>
Запомните, какой формат вы выбрали (bygraph или bypoint), — его нужно будет указать при добавлении диаграммы в письмо. У всех получателей диаграммы значения должны быть записаны в одном формате. На внешний вид диаграммы формат не влияет — дело только в удобстве.
:::tip Важно
Так как запись занимает несколько строк, данные в поле анкеты нужно загружать только через API. При импорте через интерфейс значения соберутся в одну строку, и при создании диаграммы возникнет ошибка.

[Как импортировать данные через API](https://sendsay.ru/api/api.html#C%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%87%D0%B8%D0%BA%D0%B0-%D0%9E%D0%B1%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%87%D0%B8%D0%BA%D0%B0-%D0%9A%D0%94)
:::

Следите, чтобы у получателей были все нужные данные: если для какого-то сектора не указано значение, диаграмма подтянет его из следующего сектора, и значения остальных секторов тоже съедут. Если у подписчика совсем нет данных, письмо ему отправится без диаграммы.

## 3. Добавьте диаграмму в письмо

Чтобы вставить диаграмму, нужно в HTML-код выпуска вставить фрагмент кода с настройками диаграммы и функцией PROScript. Ниже мы сначала объясним на картинке, за какие настройки отвечают разные строки кода, а ниже дадим код целиком, чтобы его можно было скопировать в письмо.

Для наглядности значения каждого сектора выделены тем же цветом, что и сам сектор на диаграмме.

![HTML code for diagram](/img/email-campaigns/personalization//how-to-add-diagram/html-code-for-diagram.png) <br/>

Код для копирования:

```
[% params = {
"data_format" => "bygraph",
  "type" => "pie",
  "title" => "Состав фонда",
  "3d" => 0,
  "show_pie_labels" => 1,
  "show_pie_percent" => 1,
  "colors" => [
     "#FF0000",
     "#4169E1",
     "#008000",
     "#8A2BE2",
  ],
} %]

<img src="[% draw_graph(params, data_by_graphs) %]">
```

Перед отправкой выпуска проверьте, как диаграмма отображается в письме:

1. В HTML-редакторе нажмите на иконку любого устройства (под адресной строкой браузера) — откроется режим предпросмотра, который показывает, как будет выглядеть письмо на разных устройствах.
2. Выберите в столбике слева пункт «Посмотреть письмо с данными конкретного подписчика», введите почту любого подписчика и нажмите «Применить».

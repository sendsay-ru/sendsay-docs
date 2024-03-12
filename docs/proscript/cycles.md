---
sidebar_position: 3
sidebar_label: 'Обработка циклов'
---

import foreachResult from '/img/proscript/cycles/foreach-result.png';

# Обработка циклов в PROScript

## FOREACH

Для обработки массивов предназначен FOREACH.
Для того, чтобы с помощью FOREACH проитерировать объект, вам надо с помощью методов keys() или values() создать массивы ключей или значений вашего объекта.

```
[% FOREACH i IN items %]
   [% i %]
[% END %]
```

Директива NEXT стартует новую итерацию, пропуская все команды после себя:

```
[% FOREACH user IN userlist %]
   [% NEXT IF user.isguest %]
   Name: [% user.name %]    Email: [% user.email %]
[% END %]
```

LAST может использоваться для выхода из цикла. Есть синоним — BREAK.

```
[% FOREACH match IN results.nsort('score').reverse %]
   [% LAST IF match.score < 50 %]
   [% match.score %] : [% match.url %]
[% END %]
```

Для упрощения работы внутри оператора FOREACH доступна переменная loop со следующими методами:

```
size()      количество элементов в массиве
max()       индекс последнего элемента (size - 1)
index()     индекс текущей итерации от 0 до max()
count()     счетчик итераций от 1 до size() (т.е. index() + 1)
first()     true если текущая итерация первая
last()      true если текущая итерация последняя
prev()      возвращает предыдущий элемент в массиве
next()      возвращает следующий элемент в массиве
```

Пример использования (построение ненумерованного списка в письме):

```
[% FOREACH item IN [ 'foo', 'bar', 'baz' ] %]
[% IF loop.first %]
<ul>
[% END %]
<li>[% loop.count %]/[% loop.size %]:[% item %]
[% IF loop.last %]
</ul>
[% END%]
[% END %]
```

Результат:

<p align="center">
  <img width="50%" src={foreachResult} alt="Result" />
</p>

## WHILE

Цикл WHILE обычно применяется, когда заранее неизвестно, сколько итераций будет выполнено, но известно условие, при котором цикл продолжает работу. Если количество итераций известно, предпочтительнее использовать цикл FOREACH.

```
[% WHILE total < 100 %] // вычисляем переменную 'x'
[% total = total+x %]
[% END %]
```

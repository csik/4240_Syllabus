<link rel="stylesheet" href="css/test.css">

---
layout: home
---
This is a test.

<img src="{{site.baseurl}}/assets/img/favicon/favicon.ico">

{% assign lectcount = 1 %}

{% for class in site.data.classes %}
    {% capture test %}_classes/{{class.slug}}.md{% endcapture %}
    {% assign node = site.classes | where:"relative_path", test | first %}
    {% if class.type == "lecture" %}
<div class="parent">
    <div class="div2">
        ialkjdflkasflkasslkfjal;skjflkasjdflkasjfl;kajsl;dfkjasl;kfjlaskjflkasjflsakjfoqwifjoqwkv;ksvnowing[iw0ngo[wrnn0iwnbowinbobn[osinvs[ivn
    </div>
    <div class="div1">
       bowijqiin[oqi24nvonin[40in42[ifn42kgn2gn[24ingklsfngsngsfngslfkglsfkg]]]]
    </div>
</div>
    {% endif %}
{% endfor %}

{% for class in site.data.classes %}
{% capture test %}_classes/{{class.slug}}.md{% endcapture %}
{% assign node = site.classes | where:"relative_path", test | first %}
{% if class.type == "lecture" %}
<div class="parent">
   <div class="div2">
       <b>{{ class.date | date: "%a, %b %d" }} {{ node.title }}</b>
       <p>
       {{ node.content }}
       </p>
   </div>
   <div class="div1">
{% if node.readings %}
Readings:
{% endif %}
<div class="readings">
{% for r in node.readings %}
{{ r | markdownify | strip }}
{% endfor %}
</div>
   </div>
</div>
{% endif %}
{% endfor %}
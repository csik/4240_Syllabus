---
layout: home
---
This is a test.

<img src="{{site.baseurl}}/assets/img/favicon/favicon.ico">

{% assign filename =  "lValuesInDesign" %}
{% assign nvar = "_classes/lValuesInDesign.md" %}
{% capture test %}_classes/{{ filename }}.md{% endcapture %}

{% assign ovar = test %}
{% if ovar == nvar %}
equal
{% else %}
!=
{% endif %}

ovar = {{ nvar }}

nvar = {{ nvar }}

test =  {{ test }}

nvar:
{% assign node = site.classes | where:"relative_path", nvar | first %}
{{ node }}
ovar:
{% assign node = site.classes | where:"relative_path", ovar | first %}
{{ node }}
test:
{% assign node = site.classes | where:"relative_path", test | first %}
{{ node }}

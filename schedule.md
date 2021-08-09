# Schedule
{% assign lectcount = 1 %}
{% assign sectcount = 1 %}
{% assign modcount = 1 %}

<style>
.tdate {
  width: 22%;
  font-family: "Monoco", monospace;
  font-size: x-large;
  vertical-align: text-top;
  background-color: "#f5fff4";
}
.tnumber {
  width: 6%;
  font-family: "Monoco", monospace;
  opacity: 0.5;
  vertical-align: text-top;
} 
.ttitle {
  align-content: end;
  padding-left: 20px;
  width: 50px;
  font-size: x-large;
  vertical-align: text-top;
}
.lecture{
  background-color: #f5fff4;
}
.module{
  background-color: #bbbbbb;
}
.holiday{
  background-color: #bbddbb;
}
.section{
  background-color: #aaccdd;
}
th, td {
  border-style: none;
  border-width: 0px;
}
.readings{
 padding-left: 20px;
 line-height: 15px;  
 margin: 5px;

}
</style>

<table id="main" style="width:100%">

{% for class in site.data.classes %}
{% capture test %}_classes/{{class.slug}}.md{% endcapture %}
{% assign node = site.classes | where:"relative_path", test | first %}

{% if class.type == "lecture" %}
 <tr class="lecture" id="rPerClass" style="width:100%">
    <td id="dPerClass" style="width:100%">
      <h3>
        <table id="embedded" style="width:100%">
          <tr class="lecture">
            <td class="tdate">{{ class.date | date: "%a, %b %d"}}
            </td>
            <td class="tnumber">L{{ lectcount | prepend: '00' | slice: -2, 2 }}
            </td>
            <td class="ttitle">{{ node.title | markdownify }}
            </td>
          </tr>
        </table>
      </h3>

{{ node.content | markdownify}}
{% if node.readings %}
      <b>Required Readings:</b>
{% endif %}
      <div class="readings">
{% for r in node.readings %}
{{ r | markdownify | strip }}
{% endfor %}
      </div>
{% assign lectcount = lectcount | plus: 1%}

{% elsif class.type == "module" %}
 <tr class="module" id="rPerClass" style="width:100%">
    <td id="dPerClass" style="width:100%">
      <h1>M{{ modcount }}: {{ node.title }}</h1>
{{ node.content | markdownify }}
{% assign modcount = modcount | plus: 1 %}

{% elsif class.type == "section" %}
 <tr class="section" id="rPerClass" style="width:100%">
    <td id="dPerClass" style="width:100%">
      <h3>
        <table style="width:100%">
          <tr>
            <td class="tdate"> {{ class.date | date: "%a, %b %d"}} </td>
            <td class="tnumber">S{{ sectcount | prepend: '00' | slice: -2, 2 }}</td> 
            <td class="ttitle">{{ node.title  }}</td>
          </tr>
        </table>
      </h3>
{{ node.content | markdownify}}
{% assign sectcount = sectcount | plus: 1 %}

{% elsif class.type == "holiday"%}
 <tr class="holiday" id="rPerClass" style="width:100%">
    <td id="dPerClass" style="width:100%">
      <h3>
        <table style="width:100%">
          <tr>
            <td class="tdate"> {{ class.date | date: "%a, %b %d"}} </td>
            <td class="tnumber">¡H!</td> 
            <td class="ttitle">{{ node.title  }}</td>
          </tr>
        </table>
      </h3>
{% endif %}
    </td>
  </tr>
{% endfor %}

</table>


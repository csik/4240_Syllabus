# Schedule
{% assign lectcount = 1 %}
{% assign sectcount = 1 %}
{% assign modcount = 1 %}
{% assign asscount = 1 %}
{% assign asscount = 1 %}

<style>
.tdate {
  /* font-family: "Monoco", monospace; */
  font-size: medium;
  background-color: "#f5fff4";
}
.tnumber {
  /* font-family: "Monoco", monospace; */
  opacity: 0.5;
 
} 
.ttitle {
  font-size: x-large;
  position: relative;
  top: 0;
}

.assignment {
  background-color: #fff192;
}

.lecture{
  /* background-color: #f5fff4; */
}
.module{
  background-color: #bbddbb;
}
.holiday{
  background-color: #bbbbbb;
}
.section{
  background-color: #aaccdd;
}
#rPerClass {
  /* padding-top: 15px; */
  border-bottom: 2px solid DarkGray;
  padding: 15px;
}
th, td {
  border-style: none;
  border-width: 0px;
}
.readings{
}
.parent {
    display: grid;
    grid-template-columns: 1fr .6fr;
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    grid-column-gap: 5%;
    grid-row-gap: 5%;
}
.titleparent {
    display: grid;
    grid-template-columns: .20fr .8fr;
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    grid-column-gap: 5%;
    grid-row-gap: 5%;
}
.two-column1 { 
  grid-area: 1 / 2 / 2 / 3;
  padding-right: 20px;
  }
.two-column2 { 
  grid-area: 1 / 1 / 1 / 1;
  min-width: 0;
  min-height: 0;
  overflow-wrap: normal;
}

.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

</style>

{% for class in site.data.classes %}
{% capture test %}_classes/{{class.slug}}.md{% endcapture %}
{% assign node = site.classes | where:"relative_path", test | first %}

{% if class.type == "lecture" %}
<div class="lecture"  id="rPerClass" style="width:100%">
<div class="titleparent">
<div class="two-column2">
<span class="tdate">{{ class.date | date: "%a, %b %d"}}</span> 
<!-- <span class="tnumber"> LECTURE{{ lectcount | prepend: '00' | slice: -2, 2 }}</span> -->
</div>
<div class="two-column1">
<h3><span class="ttitle"> LECTURE {{ lectcount | prepend: '00' | slice: -2, 2 }}: {{ node.title }}</span></h3>
</div>
</div>
<div class="parent">
<div class="two-column2">
{{ node.content | markdownify | strip }}
</div>
<div class="two-column1" style="padding-top:16px;">
{% if node.readings %}
Readings:
{% endif %}
<div class="readings">
{% for r in node.readings %}
{{ r | markdownify | strip }}
{% endfor %}
</div>
{% assign lectcount = lectcount | plus: 1%}
</div>
</div>
</div>


{% elsif class.type == "module" %}
<div class="module" id="rPerClass" style="width:100%">
<div class="titleparent">
<!-- <div class="two-column2"> -->
<!-- <span class="tdate">{{ class.date | date: "%a, %b %d"}}</span>  -->
<!-- <span class="tnumber"> MODULE{{ modcount | prepend: '00' | slice: -2, 2 }}</span> -->
</div>
<div class="two-column1">
<h3><span class="ttitle"> MODULE {{ modcount | prepend: '00' | slice: -2, 2 }}: {{ node.title }}</span></h3>
</div>
</div>
{{ node.content | markdownify }}
{% assign modcount = modcount | plus: 1 %}
</div>


{% elsif class.type == "section" %}
<div class="section" id="rPerClass" style="width:100%">
<div class="titleparent">
<div class="two-column2">
<span class="tdate">{{ class.date | date: "%a, %b %d"}}</span> 
<!-- <span class="tnumber"> SECTION{{ sectcount | prepend: '00' | slice: -2, 2 }}</span> -->
</div>
<div class="two-column1">
<h3><span class="ttitle"> {{ node.title}} {{sectcount | prepend: '00' | slice: -2, 2 }}</span></h3>
</div>
</div>
{{ node.content | markdownify}}
{% assign sectcount = sectcount | plus: 1 %}
</div>

{% elsif class.type == "assignment" %}
<div class="assignment" id="rPerClass" style="width:100%">
<div class="titleparent">
<div class="two-column2">
<span class="tdate">{{ class.date | date: "%a, %b %d"}}</span> 
<!-- <span class="tnumber"> ASSIGNMENT{{ asscount | prepend: '00' | slice: -2, 2 }}</span> -->
</div>
<div class="two-column1">
<h3><span class="ttitle">{{ node.title }}</span></h3>
</div>
</div>
{{ node.content | markdownify}}
{% assign asscount = asscount | plus: 1 %}
</div>

{% elsif class.type == "holiday" %}
<div class="holiday" id="rPerClass" style="width:100%">
<div class="titleparent">
<div class="two-column2">
<span class="tdate">{{ class.date | date: "%a, %b %d"}}</span> 
<span class="tnumber"> ¡H!</span>
</div>
<div class="two-column1">
<h3><span class="ttitle"> {{ node.title }}</span></h3>
</div>
</div>
</div>
{% endif %}
  
{% endfor %}



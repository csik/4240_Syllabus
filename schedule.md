<link rel="stylesheet" href="css/schedule.css">


# Schedule

<button class="button" id="dateButton">Go to today's date</button> 

<script type="text/javascript" src="scripts/currentDate.js"></script>


{% assign lectcount = 1 %}
{% assign sectcount = 1 %}
{% assign modcount = 1 %}
{% assign asscount = 1 %}
{% assign asscount = 1 %}

<div id="all_schedule">
{% for class in site.data.classes %}
{% capture test %}_classes/{{class.slug}}.md{% endcapture %}
{% assign node = site.classes | where:"relative_path", test | first %}

{% if class.type == "lecture" %}
<div class="lecture"  id="rPerClass">
<div class="titleparent">
<div class="two-column2">
<span id="{{ class.date | date_to_string }}" class="tdate">
  {{ class.date | date: "%a, %b %d"}}
</span> 
<span class="tnumber"> LECTURE{{ lectcount | prepend: '00' | slice: -2, 2 }}</span>
</div>
<div class="two-column1">
<h3><span class="ttitle"> {{ node.title }}</span></h3>
</div>
</div>
<div class="parent">
<div class="two-column2">
{{ node.content | markdownify | strip }}
</div>
<div class="two-column1">
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
<div class="module" id="rPerClass">
<div class="titleparent">
<!-- 
<div class="two-column2">
<span id="{{ class.date | date_to_string }}" class="tdate">
  {{ class.date | date: "%a, %b %d"}}
</span> 
<span class="tnumber"> MODULE{{ modcount | prepend: '00' | slice: -2, 2 }}</span>
</div>
!-->
<div class="two-column1">
<h3><span class="ttitle"> {{ node.title }}</span></h3>
</div>
</div>
{{ node.content | markdownify }}
{% assign modcount = modcount | plus: 1 %}
</div>


{% elsif class.type == "section" %}
<div class="section" id="rPerClass">
<div class="titleparent">
<div class="two-column2">
<span id="{{ class.date | date_to_string }}" class="tdate">
  {{ class.date | date: "%a, %b %d"}}
</span> 
<span class="tnumber"> SECTION{{ sectcount | prepend: '00' | slice: -2, 2 }}</span>
</div>
<div class="two-column1">
<h3><span class="ttitle"> {{ node.title }}</span></h3>
</div>
</div>
{{ node.content | markdownify}}
{% assign sectcount = sectcount | plus: 1 %}
</div>

{% elsif class.type == "assignment" %}
<div class="assignment" id="rPerClass">
<div class="titleparent">
<div class="two-column2">
<span id="{{ class.date | date_to_string }}" class="tdate">
  {{ class.date | date: "%a, %b %d"}}
</span> 
<span class="tnumber"> ASSIGNMENT{{ asscount | prepend: '00' | slice: -2, 2 }}</span>
</div>
<div class="two-column1">
<h3><span class="ttitle"> {{ node.title }} </span></h3>
</div>
</div>
{{ node.content | markdownify}}
{% assign asscount = asscount | plus: 1 %}
</div>

{% elsif class.type == "holiday" %}
<div class="holiday" id="rPerClass">
<div class="titleparent">
<div class="two-column2">
<span id="{{ class.date | date_to_string }}" class="tdate">
  {{ class.date | date: "%a, %b %d"}}
</span> 
<span class="tnumber"> ¡H!</span>
</div>
<div class="two-column1">
<h3><span class="ttitle"> {{ node.title }}</span></h3>
</div>
</div>
</div>
{% endif %}
  
{% endfor %}

</div>

<script>

  // Get the division inside which the
  // spans have to be found
  let container = document.getElementById("all_schedule");
  let spans = container.getElementsByTagName("span");


  // Iterate over spans
  for (let span of spans) {

    // Create a new list element with the data
    // let listElem = document.createElement("li");
    // listElem.textContent = span.textContent;

    // Insert text content of span inside output html element
    console.log(span.id);
  };

</script>



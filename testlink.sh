#!/bin/bash

# Define the target URL and the text of the link to follow
TARGET_URL="https://courses.infosci.cornell.edu/info4240/2025fa/schedule.html"
LINK_TEXT="example"

# Fetch the page content
PAGE_CONTENT=$(curl -s "$TARGET_URL")

# Extract the specific link using a combination of tools
# This command looks for the link text and then pulls the href attribute
LINK_TO_FOLLOW=$(echo "$PAGE_CONTENT" | grep -o "<a [^>]*>${LINK_TEXT}</a>" | grep -o "href=\"[^\"]*\"" | sed 's/href="//g;s/"//g')

# Check if a link was found
if [ -n "$LINK_TO_FOLLOW" ]; then
    echo "Found link: $LINK_TO_FOLLOW"

    # Construct the full URL if it's a relative link
    # This is a simple check; more complex handling is needed for all cases
    if [[ "$LINK_TO_FOLLOW" != http* ]]; then
        FULL_URL="$TARGET_URL/$LINK_TO_FOLLOW"
    else
        FULL_URL="$LINK_TO_FOLLOW"
    fi

    # Follow the link
    echo "Following link to: $FULL_URL"
    if wget --spider "$FULL_URL" 2>/dev/null; then
        echo "AOK"
        afplay /System/Library/Sounds/Glass.aiff
    else
        echo "un oh"
        afplay ./sadtrombone.swf.mp3
    fi
fi

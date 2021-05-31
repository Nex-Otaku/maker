alpha:
	echo "Alpha"

# Some unrelated comment.

beta:
	echo "Beta"

gamma: beta alpha
	echo "Gamma"

# Order me a pizza
pizza:
	echo "Pizza 1"
	echo "Pizza 2"


# Order me a hotdog
# Fast!
hotdog:
	echo "Hotdog"


# You will not see this comment in menu, since it's separated from a target with empty line.

# Order me a cup of tea
tea:
	echo "Tea"



---
layout: page
title: Robotic Academic Work
front-page: false
permalink: /academic/
headerImg:
  src: /assets/headers/sampling_optimization.png
  narrow: /assets/headers/sampling_optimization-narrow.png
  width: "500px"
  height: "346px"
  alt: A Barrett WAM robot, with a visualization of multiple motion plans 
---

## Industry Work

I used to work at [Realtime Robotics](https://rtr.ai), as a motion planning software engineer. I can't share the code that I wrote publically, but I wrote a lot of the motion planning algorithms that
we used, adding a lot of extra profiling and tracing features that we
used to specifically optimize motion planning compared to which
collision methods we were able to use, and adding mission critical features, like being able to autonomously and safely move the robots
back to their starting positions after system failures. I also wrote a lot of what I call glue work; adding internationalization to our first App, adding
linting tools like clang-tidy and clang-format to the code base,
and writing low-level communications between our application and
Siemens simulation program, Tecnomatix.

I was also one of the lead developers on their autonomous driving
projects, doing a lot of simulations and analysis for our hardware development; that project doesn't seem to have lasted after I left though.

### Slides

I gave [a presentation to the KavrakiLab](https://docs.google.com/presentation/d/19v-eMb6Pk7f0vo7XQEfQAEXfgwAIqjqdB3vN82paENA/edit?usp=sharing) in October 2020 about
industrial robotics, and how it differs from academic work.

## Master's Thesis

### Abstract

Robotic path planning is a critical problem in autonomous robotics. Two common approaches to robotic path planning are sampling-based motion planners and
continuous optimization methods. Sampling-based motion planners explore the
search space effectively, but either return low quality paths or take a long time to initially find a path. Continuous optimization methods quickly find high-quality paths,
but often return paths in collision with obstacles. This thesis combines sampling-
based and continuous optimization techniques in order to improve the performance
of these planning approaches. This thesis shows that the advantages and disadvantages of these approaches are complementary and proposes combining them into
a pipeline. The proposed pipeline results in better path quality than either approach alone, providing a robust, efficient, and high-quality general path planning
solution. The use of collision checking techniques introduced by continuous optimization methods in sampling-based planners is also analyzed and approximation
error rates and timing results are provided.

### Full Thesis

[PDF version](/assets/willey-ms-thesis.pdf)

## Publications

* Willey B., Zucker M. (2021) [Optimization-Based Planners](https://doi.org/10.1007/978-3-642-41610-1_173-1). In: Ang M.H., Khatib O., Siciliano B. (eds) Encyclopedia of Robotics. Springer, Berlin, Heidelberg. doi/10.1007/978-3-642-41610-1_173-1

## Slides

* An non technical [introduction](/engi600talk) to my master's research work
  * [PDF version](/assets/Optimization in Motion Planning.pdf)
* A more technical [presentation](/comp600talk) of my master's research
  * [PDF version](/assets/comp600talk.pdf)
* [Reinforcement Learning for Robotics](/assets/summer_2017_reinforcement_learning_slides.pdf) with [Cannon Lewis](http://cannontwo.com)

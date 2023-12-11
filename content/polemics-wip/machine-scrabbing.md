# polemics-md

https://www.wsj.com/articles/chatgpt-openai-content-abusive-sexually-explicit-harassment-kenya-workers-on-human-workers-cf191483




Ken Klippenstein of The Incercept recently published a piece on AI job listings.

I agree with the overall sentiment of both the THR and Intercept pieces, but the examples they chose don' all directly relate to the issues at hand and I think this does a disserve to public discourse around AI. I want to spend to time discussing the jobs they listed in more detail, as well as some jobs they didn't list.

### Realeyes

https://theintercept.com/2023/07/25/strike-hollywood-ai-disney-netflix/

> Realeyes develops technology to measure attention and reactions by users to video content. While the posting doesn’t mention work with streaming companies, a video on Realeyes’s website prominently features the logos for Netflix and Hulu. 
> 
> 
> 
> Experts question whether the boundary between research and commercial work is really so clear. “It’s almost a guarantee that the use of this ‘research,’ when it gets commercialized, will be to build digital actors that replace humans,” said Ben Zhao, professor of computer science at the University of Chicago. “The ‘research’ side of this is largely a red herring.” He added, “Industry research goes into commercial products.”

In this case, it's both. We can infer from the nature of their prvious work that Realeyes is aiming to train a diffusion model and pivot from their existing image classifier business. IN that sense, the project is a research expirement in a potential new revenue stream for them.

I don't think this revenue stream is going to pan out and here's why: existing content creation pipelines for CG largely surpasses the uncanny valley last decade

{apes gif / screenshot here}

Diffusion models on the other hand are a brand new techlogy that's limited to creating new images outright and introduce a brand new form of uncanney valley.

For someone trying to cut down on costs while maintining quality, A more sensible use of generative ai would be to use it to create individual 3d assets that can then be incorporated into existing professional quality cg rendering pipelines.

This is not to downplay the very valid concern SAG-AFTRA and WGA members have over their likenesses, but to explore the specifics of the technology at play here and its potential effects on society as a whole outside of this particular labor dispute.

For example...

### DNEG

It has been recently reported that a large number of VFX artists who worked on Chrisotpher Nolan's Oppenheimer haven't been credited. These artists work for DNEG, a British VFX studio that provides services for a number of Hollywood movie studios. As they're already experts in this area, I think they're a better representative of the potential uses of technology than those of an ad company.

Disney and Sony and in a bit of a middle ground here. While they do own their own internal R&D and VFX teams; Disney owns Pixar ILM and Sony owns Sony AI and SPE, but their cutting edge work is released to the public later (or even not at all), which doesn't lend itself to dictating industry trends.

> 2019 paper quote here

Since publishing that 2019, DNEG has gone on to form build their own dedicated machine learning team. 

DNEG has now created their own VFX team and in interview discuss the same exact actor scanning SAG-AFTRA is concerned about:

> https://www.ibc.org/features/ai-is-the-future-of-post-production-it-unlocks-the-impossible/8665.article

> The development of AI-based tools is making real strides, but it’s still at a stage where it’s very rarely a magic bullet; currently it’s more like an enthusiastic assistant. “Creating visual effects for a movie is all about detail, right?” Bertrand suggests. “As far as I can tell, machine learning models are not really good with details. They’ll be good with the grunt work. Or if you make something very specific, you might be able to get a really, really good Deepfake.”
> 
> “Digital doubles are really, really expensive to create right now,” she says. “They’re very popular, and are in lots of recent action-packed movies – superheroes and such. But it’s impressive how much time it takes to create a good-looking digital double. So what we’re trying to do is chip away at that. We have a few research initiatives on their way, tackling various parts of the pipeline to create digital doubles.”
> 
DNEG's AI researcher being quoted in this article is Martine Bertand, whho up until March 2022 worked as Lead of AI at Sama, an company that specializes in outsourcing labor for AI model training.

Coincidentally, March 2022 is also when Sama AI terminated their contract with OpenAI early after employees complained that the extremely violent and sexual AI-generated content they were tasked with labelling for less than four dollars an hour gave them severe mental health consequences. This was detailed in a [Wall Street Journal article](https://www.wsj.com/articles/chatgpt-openai-content-abusive-sexually-explicit-harassment-kenya-workers-on-human-workers-cf191483
) in July 2023. Per the Sama spokeswoman, the termination of this contract also involved firing the employees who handled the project for not vetting it through "proper channels".



> In March 2022, management told staffers the project would end earlier than planned. The Sama spokeswoman said the change was due to a dispute with OpenAI over one part of the project that involved handling images. The company canceled all contracts with OpenAI and didn’t earn the full $230,000 that had been estimated for the four projects, she said.
> The individuals who handled the OpenAI contract were terminated for not vetting it through “proper channels” and new vetting policies and guardrails were put in place, the Sama spokeswoman said.
 

> In March 2022, management told staffers the project would end earlier than planned. The Sama spokeswoman said the change was due to a dispute with OpenAI over one part of the project that involved handling images. The company canceled all contracts with OpenAI and didn’t earn the full $230,000 that had been estimated for the four projects, she said.
> The individuals who handled the OpenAI contract were terminated for not vetting it through “proper channels” and new vetting policies and guardrails were put in place, the Sama spokeswoman said.

There's a catch here though: the AI isn't creating the digital double, it's only speeding up the process. This means that the people who should really worry about job loss are the people doing the grunt work at these CG houses now, people who are largely already uncredited and lacking the protection of a large union. The actors' concern is tangential; their dilemma was created by the creation of  CG scanning in the first place, which predates the current hype wave.

In the long run, I think a bigger concern will be whether an actor's likeness is even needed at all if a 3D CG look-a-like can do the job. The creation of these look-a-likes may or may not involve AI.

Dimension scanned non-actor crowds, provided the virtual crows services to Zero, who in turn acted as the VFX studio for the movie. From this, we can see how the actual supply chain contributing to these films completely sidesteps engaging with the union and also doesn't involve AI workers being on HBO's payroll.


Beyond traditional VFX, 

DNEG / Oppenheimer + Netflix / Unreal / Quixel stuff here

https://www.dneg.com/wp-content/uploads/2022/11/2019-3.pdf

> Deep learning methods are a natural fit for the visual effects indus-
try, as they require a lot of data, something which VFX production
houses have in abundance: high definition HDR images; before and
after shots; high quality renders and 3D models; photogrammetry
data; all tagged and labeled in an orderly fashion. Moreover, artist
workstations are already fitted with powerful GPUs, which are
required to train and run deep learning algorithms efficiently.

the workers most likely to be displaced in the near future

a script generator? bullshit (dwarf fortress / sims)

a 3d chair generator? that's a problem that's much more constrained and well defined, and the resulting output can be tweaked by an artist in 3D. Correcting an anatomy error from an image generator in photoshop involved much more work.

This is illustrative of a geeral trend when it comes to AI: the broader and wider the capabilities of a single model, the less acurrate anworse the results will be. while llms seem to be able to do both at a glance, this is only because they've used vastly increased memory requirements to try and cover for the underlying lack of knowledge inherent to their architure. It just so happens that these neural nets use teh same hardware and libraries as the texisting products of companies like Realeye. That's the big appeal for the,



this isalo why chatgpt movie scriptz fail.

bla bla vla m mad libs

### Disney


### Sony  

## Another example: pixar

while not stirctly "generative" renderman has two features related to this:


I think NEtfliux's action here are an anomaly because they're a tech company without a creative background trying to hamfisted force their way into an industry, leading to gimmicky crap like a deepfake dating reality show. See also google and amazon's stumbles into gaming, 

two routes to success: be hands off and let studios handle your shit or spend year incubating talent that might not produce megahits for a long time (nintendo, ubisoft)

Disney, on the other hand, will continue to be representative of industry as a whole

> Disney has also listed job openings for AI-related positions. In one, the entertainment giant is looking for a senior AI engineer to “drive innovation across our cinematic pipelines and theatrical experiences.” The posting mentions several big name Disney studios where AI is already playing a role, including Marvel, Walt Disney Animation, and Pixar.Disney has also listed job openings for AI-related positions. In one, the entertainment giant is looking for a senior AI engineer to “drive innovation across our cinematic pipelines and theatrical experiences.” The posting mentions several big name Disney studios where AI is already playing a role, including Marvel, Walt Disney Animation, and Pixar.
> 
>let's go into detail here. 
>
>{pixar ml ray tracing here}
>
disney's high end r&d stays propritary, like presto. disney-owned studios do work for other studios, so ILM needs generic, non-disney-specific ai tools if they're gonna continue operating under their existing business model. I think a more likely scenario regarding ML assistance in general is one where thrid party tech companies like Adobe or Epic do the work of handling licensing for training data while the end products continue to be used by professional customers like the are now. in the long run sag-aftra should be worried about work that was previously being done on set in hollywood being done by smaller teams in more remote locations.

 The tricky question is how many of those professionals are needed and where do they live?


similarly, consider 


Now, that doesn't aean there isn't a danger here. The danger is somewhre else

Author's Note:

i'm a nbig fan if ken's foia stuff but his boss..

intercept grant
:big oof.jpeg

it's unfprtunate that this is the state of journaliam. vice is in similarly dire straights with checks bouncing. 

check bouncing tweet embed

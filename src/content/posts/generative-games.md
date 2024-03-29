---
title: "Building Games With Generative Agents."
publishedAt: 2023-09-17
description: "This is possibly my favorite application of LLMs"
slug: "generative-games"
isPublish: true
---

_This is not a tutorial, but rather how I would approach and solve this problem_

### Introduction

The advent of Large Language Models (LLMs) has opened up fascinating possibilities in the realm of video games, particularly in the area of storytelling. Back in 2019, during the era of GPT-2, numerous YouTube videos surfaced showcasing the potential of integrating conversational AI into video games. However, the technology was still in its infancy and had limitations.

With the release of GPT-3, the potential of these models was further realized and a wide variety of projects were developed using this technology. The real game-changer arrived in March 2023, with the publication of an innovative research paper titled "Generative Agents: A Simulacra Of Human Behaviour". This paper detailed the creation of a game world populated by generative agents, providing a leap forward in making digital interactions feel more human-like.

### A Brief Summary Of the Paper

The study outlined in the paper blurs the boundaries between human and machine behaviours. It introduces the concept of "generative agents", digital entities that mimic human behaviour within a virtual world. Instead of following pre-set scripts, these agents make decisions based on past experiences, maintain a digital "diary" of these experiences, and even form 'relationships' with other digital entities.

In a test environment similar to the game "The Sims", a chain of spontaneous events unfolds from a single agent's desire to host a Valentine's Day party. The study successfully combines advanced LLMs, specifically GPT-4, with interactive characters, pushing the envelope in terms of human-like digital interactions.

### Game Summary

During my time in the video game industry, I envisaged a game with an advanced narrative design. The idea was to explore what would happen if we cloned a person and placed them in an environment with their clone, without letting them know they are technically the same person.

Inspired by games like Hades and Hyper Light Drifter, I designed a narrative roguelike set in the 25th century against the backdrop of a massive war between Earth and Mars in the metaverse. The game explores the journey of two consciousness fragments of a victim of an attack by Mars' superintelligent agent, Redian. These fragments, Cassandra and Dot, must work together to survive in the war-torn metaverse, unaware that they were once a single entity. The game uses a unique narrative structure to create an emotionally charged story.

### Generative Agents To The Rescue

The game draws heavy inspiration from Hades, particularly in terms of gameplay and narrative design. However, Hades does have limitations, such as the occasional repetition of dialogue. To overcome this, I propose using generative agents for Cassandra and Dot. This would involve creating personas for each character, including basic characteristics and objectives.

To generate unique dialogue for each run, I would devise a mechanism that feeds the LLM with the characters' personas and their experiences during the run. This would ensure that the dialogue is unique and relevant to each run, enhancing the narrative progression and the overall gaming experience.

### Implementation

The Implementation of generative agents into the narrative roguelike game can be achieved using LLaMa, a specific Large Language Model developed by Meta AI. The process involves creating unique personas for characters, Cassandra and Dot, and utilizing these personas in the dialogue generation process. This would help to keep the dialogue fresh and unique for each game run, enhancing the narrative progression and player's gaming progression.

Here's how you could approach this:

-   **Create Character Personas**: Start by defining clear personas for Cassandra and Dot. This involves specifying their names, objectives, and basic characteristics. For instance, Cassandra's mission could be to survive and fight Redian and its forces, while Dot could be given partial, hazy memories to form a distinct personality
-   **Setup LLaMA**: LLaMA would be the LLM of choice for dialogue generation. To prepare it for this task, you would need to train it on dialogue data from similar games and genres. This training would help it generate dialogue that fits the characters and the game world
-   **Feed Character Experiences**: During each game run, supply the LLaMA model with the characters' personas and their experiences during the run. This would allow the model to generate dialogue that is relevant and unique to each run
-   **Generate Dialogue**: Finally, use the LLaMA model to generate dialogue for the characters based on their personas and experiences. This could be done using a specialized module or API for dialogue generation

> The most important aspect of this game is how Cassandra and Dot will evolve as they get to know each other and therefore to allow for character growth as the game progresses, the implementation needs to incorporate a mechanism for evolution in the characters personas and their interactions with the environment.

### **Character Growth**

The personas created for Cassandra and Dot at the beginning of the game should not remain static. As the game progresses, these personas should evolve based on the characters' experiences and decisions. For example, if Cassandra makes a strategic decision that leads to a significant victory, her confidence level could increase. This change in her persona could then be reflected in her future dialogues and decisions. Similarly, Dot's partial memories could become clearer or more fragmented based on the events in the game

### Environment Interaction

The characters should also interact with the game environment in a way that reflects their growth. For instance, if Cassandra becomes more experienced and skilled in combat, she should be able to navigate the game environment more efficiently, and this should be reflected in her dialogues and actions. The LLaMA model could be used to generate appropriate responses based on the characters' evolved personas and their interaction with the environment

### **Memory Recall**

The LLaMA model can be used to recall previous experiences of the characters and use these memories to guide their future actions and decisions. This mechanism can help make the characters' behavior more realistic and human-like. For example, if Cassandra had a near-death experience in a particular situation, she might be more cautious when faced with a similar situation in the future.

### **Feedback Loop**

To ensure that the character growth is effective and realistic, there should be a feedback loop where the outcomes of the characters' decisions and actions are fed back into the LLaMA model. This feedback can then be used to adjust the characters' personas and guide their future behavior.

### Conclusion

By incorporating these mechanisms, the game can offer a more immersive and dynamic experience where the characters grow and evolve as the story progresses. This approach also offers the potential to create a unique narrative for each game run, adding depth and replayability to the game.

In the future of narrative design in video games, we may witness an interesting fusion of human creativity and artificial intelligence. Game developers and writers could lay the groundwork by creating a compelling world and backstory, and then entrust the progression of the story to an AI. This approach would be akin to a game with a branching storyline, but the branches would be managed by an AI.

With this approach, the narrative becomes dynamic and adapts based on player actions. The AI, equipped with a generative model, would be responsible for making decisions that shape the story's progression. This introduces an element of unpredictability and excitement, as even the human writers would not know the exact course the narrative will take.

This concept signifies a revolutionary step in game design, where storytelling evolves from being a static element to a dynamic and interactive experience. It holds the promise of creating a truly immersive gaming world with virtually limitless narrative possibilities, adding an extraordinary level of depth and replayability to games. The future of video game narratives could very well be an exciting blend of human ingenuity and AI innovation.

from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer('all-MiniLM-L6-v2')

def estimate_similarity(desc, tags):
    description_embedding = model.encode(desc, convert_to_tensor=True)
    tags_embeddings = model.encode(tags, convert_to_tensor=True)

    similarities = util.cos_sim(description_embedding, tags_embeddings)[0]

    return similarities

def choose_relevant(choices, tags, min_similarity_percent=0.20):

    choosen = []

    for choice in choices:
        similarities = estimate_similarity(choice.desc, tags)
        ratings = list(map(lambda x: x.item(), similarities))
        if(min(ratings) >= min_similarity_percent):
            choosen += [choice]

    return choosen
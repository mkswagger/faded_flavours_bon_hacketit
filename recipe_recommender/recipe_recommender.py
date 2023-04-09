import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load dataset
recipes_df = pd.read_csv('indian_dishes.csv')

# Define vectorizer object
vectorizer = CountVectorizer()

# Create ingredient list string for each recipe
recipes_df['ingredients'] = recipes_df.apply(lambda x: ','.join([str(i) for i in x[1:]]), axis=1)

# Create ingredient count matrix
ingredient_count_matrix = vectorizer.fit_transform(recipes_df['ingredients'])

# Define function to get top n similar recipes
def get_similar_recipes(input_dishes, n, recipes_df):
    # Create ingredient list string for input dishes
    input_dishes_list = ','.join(input_dishes)
    
    # Add input dishes to dataset
    new_row = {'name': 'input_dishes', 'ingredients': input_dishes_list}
    recipes_df = recipes_df.append(new_row, ignore_index=True)
    
    # Create ingredient count matrix
    ingredient_count_matrix = vectorizer.fit_transform(recipes_df['ingredients'])
    
    # Get cosine similarity scores between input dishes and all recipes
    cosine_similarities = cosine_similarity(ingredient_count_matrix)
    cosine_scores = list(enumerate(cosine_similarities[-1]))
    
    # Sort cosine scores in descending order
    sorted_cosine_scores = sorted(cosine_scores, key=lambda x:x[1], reverse=True)
    
    # Get top n similar recipes
    top_n_similar_recipes = []
    for i in range(1,n+1):
        top_n_similar_recipes.append(recipes_df.iloc[sorted_cosine_scores[i][0]]['name'])
    
    # Remove input dishes from dataset
    recipes_df.drop(recipes_df.tail(1).index, inplace=True)
    
    return top_n_similar_recipes

# Example usage
input_dishes = ['rice', 'chicken', 'tomato', 'onion', 'ginger', 'garlic']
n = 5

similar_recipes = get_similar_recipes(input_dishes, n, recipes_df)

print(similar_recipes)

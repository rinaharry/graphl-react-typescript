import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field
} from "type-graphql";
import { Movie } from "../entity/Movie";

@InputType()
class MovieInput {
  @Field()
  title: string;

  @Field(() => Int)
  minutes: number;
}

@InputType()
class MovieUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Int, { nullable: true })
  minutes?: number;
}

@Resolver()
export class MovieResolver {
  @Mutation(() => Movie)
  async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
    console.log(options)
    try {
      const movie = await Movie.create(options).save();
      return movie;
    } catch (error) {
      throw error
    }
  
  }

  @Mutation(() => Boolean)
  async updateMovie(
    @Arg("id", () => Int) id: number,
    @Arg("input", () => MovieUpdateInput) input: MovieUpdateInput
  ) {
    try {
      const movie =  await Movie.findOne({id})
      if (movie) {
        await Movie.update({ id }, input);
          return true;
      } else {
        return false
      }
      
    } catch (error) {
        throw error
    }
    
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Arg("id", () => Int) id: number) {
    await Movie.delete({ id });
    return true;
  }

  @Query( () => [Movie])
  async movies() {
     try {
      const movies = await Movie.find()
          return movies;
     } catch (error) {
        throw error
     }
  }

  @Query( () => Movie)
  async movie(@Arg("id", () => Int) id: number) {
    try {
      const movie =  await Movie.findOne({id})
      if(!movie) {
        throw new Error ('movie already not existe')
      } else {
        return movie;
      }
    } catch (error) {
      throw error 
    }       
    
  }
}

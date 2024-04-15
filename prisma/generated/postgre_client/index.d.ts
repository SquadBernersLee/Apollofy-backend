
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Artists
 * 
 */
export type Artists = $Result.DefaultSelection<Prisma.$ArtistsPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model AlbumArtist
 * 
 */
export type AlbumArtist = $Result.DefaultSelection<Prisma.$AlbumArtistPayload>
/**
 * Model PlaylistTracks
 * 
 */
export type PlaylistTracks = $Result.DefaultSelection<Prisma.$PlaylistTracksPayload>
/**
 * Model LikedTracks
 * 
 */
export type LikedTracks = $Result.DefaultSelection<Prisma.$LikedTracksPayload>
/**
 * Model FollowPlaylist
 * 
 */
export type FollowPlaylist = $Result.DefaultSelection<Prisma.$FollowPlaylistPayload>
/**
 * Model LikedAlbums
 * 
 */
export type LikedAlbums = $Result.DefaultSelection<Prisma.$LikedAlbumsPayload>
/**
 * Model Followers
 * 
 */
export type Followers = $Result.DefaultSelection<Prisma.$FollowersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tracks
 * const tracks = await prisma.track.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tracks
   * const tracks = await prisma.track.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs>;

  /**
   * `prisma.artists`: Exposes CRUD operations for the **Artists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artists.findMany()
    * ```
    */
  get artists(): Prisma.ArtistsDelegate<ExtArgs>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs>;

  /**
   * `prisma.albumArtist`: Exposes CRUD operations for the **AlbumArtist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumArtists
    * const albumArtists = await prisma.albumArtist.findMany()
    * ```
    */
  get albumArtist(): Prisma.AlbumArtistDelegate<ExtArgs>;

  /**
   * `prisma.playlistTracks`: Exposes CRUD operations for the **PlaylistTracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistTracks
    * const playlistTracks = await prisma.playlistTracks.findMany()
    * ```
    */
  get playlistTracks(): Prisma.PlaylistTracksDelegate<ExtArgs>;

  /**
   * `prisma.likedTracks`: Exposes CRUD operations for the **LikedTracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedTracks
    * const likedTracks = await prisma.likedTracks.findMany()
    * ```
    */
  get likedTracks(): Prisma.LikedTracksDelegate<ExtArgs>;

  /**
   * `prisma.followPlaylist`: Exposes CRUD operations for the **FollowPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowPlaylists
    * const followPlaylists = await prisma.followPlaylist.findMany()
    * ```
    */
  get followPlaylist(): Prisma.FollowPlaylistDelegate<ExtArgs>;

  /**
   * `prisma.likedAlbums`: Exposes CRUD operations for the **LikedAlbums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedAlbums
    * const likedAlbums = await prisma.likedAlbums.findMany()
    * ```
    */
  get likedAlbums(): Prisma.LikedAlbumsDelegate<ExtArgs>;

  /**
   * `prisma.followers`: Exposes CRUD operations for the **Followers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followers
    * const followers = await prisma.followers.findMany()
    * ```
    */
  get followers(): Prisma.FollowersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Track: 'Track',
    User: 'User',
    Playlist: 'Playlist',
    Genre: 'Genre',
    Artists: 'Artists',
    Album: 'Album',
    AlbumArtist: 'AlbumArtist',
    PlaylistTracks: 'PlaylistTracks',
    LikedTracks: 'LikedTracks',
    FollowPlaylist: 'FollowPlaylist',
    LikedAlbums: 'LikedAlbums',
    Followers: 'Followers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'track' | 'user' | 'playlist' | 'genre' | 'artists' | 'album' | 'albumArtist' | 'playlistTracks' | 'likedTracks' | 'followPlaylist' | 'likedAlbums' | 'followers'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>,
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>,
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Artists: {
        payload: Prisma.$ArtistsPayload<ExtArgs>
        fields: Prisma.ArtistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findFirst: {
            args: Prisma.ArtistsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findMany: {
            args: Prisma.ArtistsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          create: {
            args: Prisma.ArtistsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          createMany: {
            args: Prisma.ArtistsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtistsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          update: {
            args: Prisma.ArtistsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtistsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          aggregate: {
            args: Prisma.ArtistsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtists>
          }
          groupBy: {
            args: Prisma.ArtistsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistsCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistsCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>,
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      AlbumArtist: {
        payload: Prisma.$AlbumArtistPayload<ExtArgs>
        fields: Prisma.AlbumArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumArtistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumArtistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumArtistPayload>
          }
          findFirst: {
            args: Prisma.AlbumArtistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumArtistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumArtistPayload>
          }
          findMany: {
            args: Prisma.AlbumArtistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumArtistPayload>[]
          }
          create: {
            args: Prisma.AlbumArtistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumArtistPayload>
          }
          createMany: {
            args: Prisma.AlbumArtistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlbumArtistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumArtistPayload>
          }
          update: {
            args: Prisma.AlbumArtistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumArtistPayload>
          }
          deleteMany: {
            args: Prisma.AlbumArtistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumArtistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlbumArtistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumArtistPayload>
          }
          aggregate: {
            args: Prisma.AlbumArtistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlbumArtist>
          }
          groupBy: {
            args: Prisma.AlbumArtistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlbumArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumArtistCountArgs<ExtArgs>,
            result: $Utils.Optional<AlbumArtistCountAggregateOutputType> | number
          }
        }
      }
      PlaylistTracks: {
        payload: Prisma.$PlaylistTracksPayload<ExtArgs>
        fields: Prisma.PlaylistTracksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistTracksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistTracksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistTracksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistTracksPayload>
          }
          findFirst: {
            args: Prisma.PlaylistTracksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistTracksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistTracksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistTracksPayload>
          }
          findMany: {
            args: Prisma.PlaylistTracksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistTracksPayload>[]
          }
          create: {
            args: Prisma.PlaylistTracksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistTracksPayload>
          }
          createMany: {
            args: Prisma.PlaylistTracksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlaylistTracksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistTracksPayload>
          }
          update: {
            args: Prisma.PlaylistTracksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistTracksPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistTracksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistTracksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistTracksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistTracksPayload>
          }
          aggregate: {
            args: Prisma.PlaylistTracksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlaylistTracks>
          }
          groupBy: {
            args: Prisma.PlaylistTracksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistTracksGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistTracksCountArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistTracksCountAggregateOutputType> | number
          }
        }
      }
      LikedTracks: {
        payload: Prisma.$LikedTracksPayload<ExtArgs>
        fields: Prisma.LikedTracksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedTracksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedTracksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedTracksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedTracksPayload>
          }
          findFirst: {
            args: Prisma.LikedTracksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedTracksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedTracksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedTracksPayload>
          }
          findMany: {
            args: Prisma.LikedTracksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedTracksPayload>[]
          }
          create: {
            args: Prisma.LikedTracksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedTracksPayload>
          }
          createMany: {
            args: Prisma.LikedTracksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikedTracksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedTracksPayload>
          }
          update: {
            args: Prisma.LikedTracksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedTracksPayload>
          }
          deleteMany: {
            args: Prisma.LikedTracksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikedTracksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikedTracksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedTracksPayload>
          }
          aggregate: {
            args: Prisma.LikedTracksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikedTracks>
          }
          groupBy: {
            args: Prisma.LikedTracksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikedTracksGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedTracksCountArgs<ExtArgs>,
            result: $Utils.Optional<LikedTracksCountAggregateOutputType> | number
          }
        }
      }
      FollowPlaylist: {
        payload: Prisma.$FollowPlaylistPayload<ExtArgs>
        fields: Prisma.FollowPlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowPlaylistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowPlaylistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPlaylistPayload>
          }
          findFirst: {
            args: Prisma.FollowPlaylistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowPlaylistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPlaylistPayload>
          }
          findMany: {
            args: Prisma.FollowPlaylistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPlaylistPayload>[]
          }
          create: {
            args: Prisma.FollowPlaylistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPlaylistPayload>
          }
          createMany: {
            args: Prisma.FollowPlaylistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FollowPlaylistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPlaylistPayload>
          }
          update: {
            args: Prisma.FollowPlaylistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPlaylistPayload>
          }
          deleteMany: {
            args: Prisma.FollowPlaylistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FollowPlaylistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FollowPlaylistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPlaylistPayload>
          }
          aggregate: {
            args: Prisma.FollowPlaylistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollowPlaylist>
          }
          groupBy: {
            args: Prisma.FollowPlaylistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowPlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowPlaylistCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowPlaylistCountAggregateOutputType> | number
          }
        }
      }
      LikedAlbums: {
        payload: Prisma.$LikedAlbumsPayload<ExtArgs>
        fields: Prisma.LikedAlbumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedAlbumsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedAlbumsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          findFirst: {
            args: Prisma.LikedAlbumsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedAlbumsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          findMany: {
            args: Prisma.LikedAlbumsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>[]
          }
          create: {
            args: Prisma.LikedAlbumsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          createMany: {
            args: Prisma.LikedAlbumsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikedAlbumsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          update: {
            args: Prisma.LikedAlbumsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          deleteMany: {
            args: Prisma.LikedAlbumsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikedAlbumsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikedAlbumsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          aggregate: {
            args: Prisma.LikedAlbumsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikedAlbums>
          }
          groupBy: {
            args: Prisma.LikedAlbumsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikedAlbumsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedAlbumsCountArgs<ExtArgs>,
            result: $Utils.Optional<LikedAlbumsCountAggregateOutputType> | number
          }
        }
      }
      Followers: {
        payload: Prisma.$FollowersPayload<ExtArgs>
        fields: Prisma.FollowersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          findFirst: {
            args: Prisma.FollowersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          findMany: {
            args: Prisma.FollowersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>[]
          }
          create: {
            args: Prisma.FollowersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          createMany: {
            args: Prisma.FollowersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FollowersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          update: {
            args: Prisma.FollowersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          deleteMany: {
            args: Prisma.FollowersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FollowersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FollowersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          aggregate: {
            args: Prisma.FollowersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollowers>
          }
          groupBy: {
            args: Prisma.FollowersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowersCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    id: number | null
  }

  export type TrackSumAggregateOutputType = {
    id: number | null
  }

  export type TrackMinAggregateOutputType = {
    id: number | null
    name: string | null
    artist: string | null
    url: string | null
    albumId: string | null
    thumbnail: string | null
    genreId: string | null
  }

  export type TrackMaxAggregateOutputType = {
    id: number | null
    name: string | null
    artist: string | null
    url: string | null
    albumId: string | null
    thumbnail: string | null
    genreId: string | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    name: number
    artist: number
    url: number
    albumId: number
    thumbnail: number
    genreId: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    id?: true
  }

  export type TrackSumAggregateInputType = {
    id?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    name?: true
    artist?: true
    url?: true
    albumId?: true
    thumbnail?: true
    genreId?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    name?: true
    artist?: true
    url?: true
    albumId?: true
    thumbnail?: true
    genreId?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    name?: true
    artist?: true
    url?: true
    albumId?: true
    thumbnail?: true
    genreId?: true
    _all?: true
  }

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    id: number
    name: string
    artist: string
    url: string
    albumId: string
    thumbnail: string
    genreId: string
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    artist?: boolean
    url?: boolean
    albumId?: boolean
    thumbnail?: boolean
    genreId?: boolean
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
    id?: boolean
    name?: boolean
    artist?: boolean
    url?: boolean
    albumId?: boolean
    thumbnail?: boolean
    genreId?: boolean
  }


  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      artist: string
      url: string
      albumId: string
      thumbnail: string
      genreId: string
    }, ExtArgs["result"]["track"]>
    composites: {}
  }


  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Track that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
    **/
    create<T extends TrackCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackCreateArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tracks.
     *     @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     *     @example
     *     // Create many Tracks
     *     const track = await prisma.track.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
    **/
    delete<T extends TrackDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
    **/
    upsert<T extends TrackUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>
    ): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Track model
   */ 
  interface TrackFieldRefs {
    readonly id: FieldRef<"Track", 'Int'>
    readonly name: FieldRef<"Track", 'String'>
    readonly artist: FieldRef<"Track", 'String'>
    readonly url: FieldRef<"Track", 'String'>
    readonly albumId: FieldRef<"Track", 'String'>
    readonly thumbnail: FieldRef<"Track", 'String'>
    readonly genreId: FieldRef<"Track", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }


  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }


  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
  }


  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }


  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
  }


  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    city: string | null
    gender: string | null
    profilePicture: string | null
    country: string | null
    dateOfBirth: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    city: string | null
    gender: string | null
    profilePicture: string | null
    country: string | null
    dateOfBirth: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    city: number
    gender: number
    profilePicture: number
    country: number
    dateOfBirth: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    city?: true
    gender?: true
    profilePicture?: true
    country?: true
    dateOfBirth?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    city?: true
    gender?: true
    profilePicture?: true
    country?: true
    dateOfBirth?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    city?: true
    gender?: true
    profilePicture?: true
    country?: true
    dateOfBirth?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    password: string
    city: string
    gender: string
    profilePicture: string | null
    country: string
    dateOfBirth: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    city?: boolean
    gender?: boolean
    profilePicture?: boolean
    country?: boolean
    dateOfBirth?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    city?: boolean
    gender?: boolean
    profilePicture?: boolean
    country?: boolean
    dateOfBirth?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      password: string
      city: string
      gender: string
      profilePicture: string | null
      country: string
      dateOfBirth: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    id: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    id: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    description: string | null
    primaryColor: string | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    description: string | null
    primaryColor: string | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    description: number
    primaryColor: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    id?: true
  }

  export type PlaylistSumAggregateInputType = {
    id?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    description?: true
    primaryColor?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    description?: true
    primaryColor?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    description?: true
    primaryColor?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: number
    name: string
    imageUrl: string
    description: string
    primaryColor: string
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    description?: boolean
    primaryColor?: boolean
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    description?: boolean
    primaryColor?: boolean
  }


  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string
      description: string
      primaryColor: string
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }


  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Playlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaylistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
    **/
    create<T extends PlaylistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Playlists.
     *     @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     *     @example
     *     // Create many Playlists
     *     const playlist = await prisma.playlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Playlist model
   */ 
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'Int'>
    readonly name: FieldRef<"Playlist", 'String'>
    readonly imageUrl: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly primaryColor: FieldRef<"Playlist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }


  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }


  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
  }



  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }


  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreCreateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }


  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
  }



  /**
   * Model Artists
   */

  export type AggregateArtists = {
    _count: ArtistsCountAggregateOutputType | null
    _avg: ArtistsAvgAggregateOutputType | null
    _sum: ArtistsSumAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  export type ArtistsAvgAggregateOutputType = {
    id: number | null
    popularity: number | null
  }

  export type ArtistsSumAggregateOutputType = {
    id: number | null
    popularity: number | null
  }

  export type ArtistsMinAggregateOutputType = {
    id: number | null
    name: string | null
    genreId: string | null
    popularity: number | null
    photoUrl: string | null
    albumId: string | null
  }

  export type ArtistsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    genreId: string | null
    popularity: number | null
    photoUrl: string | null
    albumId: string | null
  }

  export type ArtistsCountAggregateOutputType = {
    id: number
    name: number
    genreId: number
    popularity: number
    photoUrl: number
    albumId: number
    _all: number
  }


  export type ArtistsAvgAggregateInputType = {
    id?: true
    popularity?: true
  }

  export type ArtistsSumAggregateInputType = {
    id?: true
    popularity?: true
  }

  export type ArtistsMinAggregateInputType = {
    id?: true
    name?: true
    genreId?: true
    popularity?: true
    photoUrl?: true
    albumId?: true
  }

  export type ArtistsMaxAggregateInputType = {
    id?: true
    name?: true
    genreId?: true
    popularity?: true
    photoUrl?: true
    albumId?: true
  }

  export type ArtistsCountAggregateInputType = {
    id?: true
    name?: true
    genreId?: true
    popularity?: true
    photoUrl?: true
    albumId?: true
    _all?: true
  }

  export type ArtistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to aggregate.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsMaxAggregateInputType
  }

  export type GetArtistsAggregateType<T extends ArtistsAggregateArgs> = {
        [P in keyof T & keyof AggregateArtists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtists[P]>
      : GetScalarType<T[P], AggregateArtists[P]>
  }




  export type ArtistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
    orderBy?: ArtistsOrderByWithAggregationInput | ArtistsOrderByWithAggregationInput[]
    by: ArtistsScalarFieldEnum[] | ArtistsScalarFieldEnum
    having?: ArtistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsCountAggregateInputType | true
    _avg?: ArtistsAvgAggregateInputType
    _sum?: ArtistsSumAggregateInputType
    _min?: ArtistsMinAggregateInputType
    _max?: ArtistsMaxAggregateInputType
  }

  export type ArtistsGroupByOutputType = {
    id: number
    name: string
    genreId: string
    popularity: number
    photoUrl: string
    albumId: string
    _count: ArtistsCountAggregateOutputType | null
    _avg: ArtistsAvgAggregateOutputType | null
    _sum: ArtistsSumAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  type GetArtistsGroupByPayload<T extends ArtistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genreId?: boolean
    popularity?: boolean
    photoUrl?: boolean
    albumId?: boolean
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectScalar = {
    id?: boolean
    name?: boolean
    genreId?: boolean
    popularity?: boolean
    photoUrl?: boolean
    albumId?: boolean
  }


  export type $ArtistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artists"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      genreId: string
      popularity: number
      photoUrl: string
      albumId: string
    }, ExtArgs["result"]["artists"]>
    composites: {}
  }


  type ArtistsGetPayload<S extends boolean | null | undefined | ArtistsDefaultArgs> = $Result.GetResult<Prisma.$ArtistsPayload, S>

  type ArtistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtistsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtistsCountAggregateInputType | true
    }

  export interface ArtistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artists'], meta: { name: 'Artists' } }
    /**
     * Find zero or one Artists that matches the filter.
     * @param {ArtistsFindUniqueArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artists that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistsFindUniqueOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindFirstArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artists.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistsWithIdOnly = await prisma.artists.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artists.
     * @param {ArtistsCreateArgs} args - Arguments to create a Artists.
     * @example
     * // Create one Artists
     * const Artists = await prisma.artists.create({
     *   data: {
     *     // ... data to create a Artists
     *   }
     * })
     * 
    **/
    create<T extends ArtistsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsCreateArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artists.
     *     @param {ArtistsCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artists = await prisma.artists.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artists.
     * @param {ArtistsDeleteArgs} args - Arguments to delete one Artists.
     * @example
     * // Delete one Artists
     * const Artists = await prisma.artists.delete({
     *   where: {
     *     // ... filter to delete one Artists
     *   }
     * })
     * 
    **/
    delete<T extends ArtistsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsDeleteArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artists.
     * @param {ArtistsUpdateArgs} args - Arguments to update one Artists.
     * @example
     * // Update one Artists
     * const artists = await prisma.artists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsUpdateArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {ArtistsDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artists = await prisma.artists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artists.
     * @param {ArtistsUpsertArgs} args - Arguments to update or create a Artists.
     * @example
     * // Update or create a Artists
     * const artists = await prisma.artists.upsert({
     *   create: {
     *     // ... data to create a Artists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artists we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsUpsertArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artists.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistsCountArgs>(
      args?: Subset<T, ArtistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistsAggregateArgs>(args: Subset<T, ArtistsAggregateArgs>): Prisma.PrismaPromise<GetArtistsAggregateType<T>>

    /**
     * Group by Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artists model
   */
  readonly fields: ArtistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Artists model
   */ 
  interface ArtistsFieldRefs {
    readonly id: FieldRef<"Artists", 'Int'>
    readonly name: FieldRef<"Artists", 'String'>
    readonly genreId: FieldRef<"Artists", 'String'>
    readonly popularity: FieldRef<"Artists", 'Float'>
    readonly photoUrl: FieldRef<"Artists", 'String'>
    readonly albumId: FieldRef<"Artists", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Artists findUnique
   */
  export type ArtistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists findUniqueOrThrow
   */
  export type ArtistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists findFirst
   */
  export type ArtistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Artists findFirstOrThrow
   */
  export type ArtistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Artists findMany
   */
  export type ArtistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Artists create
   */
  export type ArtistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * The data needed to create a Artists.
     */
    data: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
  }


  /**
   * Artists createMany
   */
  export type ArtistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistsCreateManyInput | ArtistsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Artists update
   */
  export type ArtistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * The data needed to update a Artists.
     */
    data: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
    /**
     * Choose, which Artists to update.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists updateMany
   */
  export type ArtistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistsWhereInput
  }


  /**
   * Artists upsert
   */
  export type ArtistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * The filter to search for the Artists to update in case it exists.
     */
    where: ArtistsWhereUniqueInput
    /**
     * In case the Artists found by the `where` argument doesn't exist, create a new Artists with this data.
     */
    create: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
    /**
     * In case the Artists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
  }


  /**
   * Artists delete
   */
  export type ArtistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Filter which Artists to delete.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists deleteMany
   */
  export type ArtistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistsWhereInput
  }


  /**
   * Artists without action
   */
  export type ArtistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
  }



  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    name: string
    imageUrl: string
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
  }


  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string
    }, ExtArgs["result"]["album"]>
    composites: {}
  }


  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Album that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
    **/
    create<T extends AlbumCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Albums.
     *     @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const album = await prisma.album.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
    **/
    delete<T extends AlbumDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Album model
   */ 
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'Int'>
    readonly name: FieldRef<"Album", 'String'>
    readonly imageUrl: FieldRef<"Album", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }


  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
  }


  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }


  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
  }


  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
  }



  /**
   * Model AlbumArtist
   */

  export type AggregateAlbumArtist = {
    _count: AlbumArtistCountAggregateOutputType | null
    _avg: AlbumArtistAvgAggregateOutputType | null
    _sum: AlbumArtistSumAggregateOutputType | null
    _min: AlbumArtistMinAggregateOutputType | null
    _max: AlbumArtistMaxAggregateOutputType | null
  }

  export type AlbumArtistAvgAggregateOutputType = {
    id: number | null
    artistsId: number | null
    albumId: number | null
  }

  export type AlbumArtistSumAggregateOutputType = {
    id: number | null
    artistsId: number | null
    albumId: number | null
  }

  export type AlbumArtistMinAggregateOutputType = {
    id: number | null
    artistsId: number | null
    albumId: number | null
  }

  export type AlbumArtistMaxAggregateOutputType = {
    id: number | null
    artistsId: number | null
    albumId: number | null
  }

  export type AlbumArtistCountAggregateOutputType = {
    id: number
    artistsId: number
    albumId: number
    _all: number
  }


  export type AlbumArtistAvgAggregateInputType = {
    id?: true
    artistsId?: true
    albumId?: true
  }

  export type AlbumArtistSumAggregateInputType = {
    id?: true
    artistsId?: true
    albumId?: true
  }

  export type AlbumArtistMinAggregateInputType = {
    id?: true
    artistsId?: true
    albumId?: true
  }

  export type AlbumArtistMaxAggregateInputType = {
    id?: true
    artistsId?: true
    albumId?: true
  }

  export type AlbumArtistCountAggregateInputType = {
    id?: true
    artistsId?: true
    albumId?: true
    _all?: true
  }

  export type AlbumArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumArtist to aggregate.
     */
    where?: AlbumArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumArtists to fetch.
     */
    orderBy?: AlbumArtistOrderByWithRelationInput | AlbumArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumArtists
    **/
    _count?: true | AlbumArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumArtistMaxAggregateInputType
  }

  export type GetAlbumArtistAggregateType<T extends AlbumArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumArtist[P]>
      : GetScalarType<T[P], AggregateAlbumArtist[P]>
  }




  export type AlbumArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumArtistWhereInput
    orderBy?: AlbumArtistOrderByWithAggregationInput | AlbumArtistOrderByWithAggregationInput[]
    by: AlbumArtistScalarFieldEnum[] | AlbumArtistScalarFieldEnum
    having?: AlbumArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumArtistCountAggregateInputType | true
    _avg?: AlbumArtistAvgAggregateInputType
    _sum?: AlbumArtistSumAggregateInputType
    _min?: AlbumArtistMinAggregateInputType
    _max?: AlbumArtistMaxAggregateInputType
  }

  export type AlbumArtistGroupByOutputType = {
    id: number
    artistsId: number
    albumId: number
    _count: AlbumArtistCountAggregateOutputType | null
    _avg: AlbumArtistAvgAggregateOutputType | null
    _sum: AlbumArtistSumAggregateOutputType | null
    _min: AlbumArtistMinAggregateOutputType | null
    _max: AlbumArtistMaxAggregateOutputType | null
  }

  type GetAlbumArtistGroupByPayload<T extends AlbumArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumArtistGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumArtistGroupByOutputType[P]>
        }
      >
    >


  export type AlbumArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistsId?: boolean
    albumId?: boolean
  }, ExtArgs["result"]["albumArtist"]>

  export type AlbumArtistSelectScalar = {
    id?: boolean
    artistsId?: boolean
    albumId?: boolean
  }


  export type $AlbumArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlbumArtist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      artistsId: number
      albumId: number
    }, ExtArgs["result"]["albumArtist"]>
    composites: {}
  }


  type AlbumArtistGetPayload<S extends boolean | null | undefined | AlbumArtistDefaultArgs> = $Result.GetResult<Prisma.$AlbumArtistPayload, S>

  type AlbumArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumArtistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlbumArtistCountAggregateInputType | true
    }

  export interface AlbumArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlbumArtist'], meta: { name: 'AlbumArtist' } }
    /**
     * Find zero or one AlbumArtist that matches the filter.
     * @param {AlbumArtistFindUniqueArgs} args - Arguments to find a AlbumArtist
     * @example
     * // Get one AlbumArtist
     * const albumArtist = await prisma.albumArtist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumArtistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumArtistFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumArtistClient<$Result.GetResult<Prisma.$AlbumArtistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AlbumArtist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumArtistFindUniqueOrThrowArgs} args - Arguments to find a AlbumArtist
     * @example
     * // Get one AlbumArtist
     * const albumArtist = await prisma.albumArtist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumArtistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumArtistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumArtistClient<$Result.GetResult<Prisma.$AlbumArtistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AlbumArtist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumArtistFindFirstArgs} args - Arguments to find a AlbumArtist
     * @example
     * // Get one AlbumArtist
     * const albumArtist = await prisma.albumArtist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumArtistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumArtistFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumArtistClient<$Result.GetResult<Prisma.$AlbumArtistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AlbumArtist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumArtistFindFirstOrThrowArgs} args - Arguments to find a AlbumArtist
     * @example
     * // Get one AlbumArtist
     * const albumArtist = await prisma.albumArtist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumArtistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumArtistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumArtistClient<$Result.GetResult<Prisma.$AlbumArtistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AlbumArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumArtists
     * const albumArtists = await prisma.albumArtist.findMany()
     * 
     * // Get first 10 AlbumArtists
     * const albumArtists = await prisma.albumArtist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumArtistWithIdOnly = await prisma.albumArtist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumArtistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumArtistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumArtistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AlbumArtist.
     * @param {AlbumArtistCreateArgs} args - Arguments to create a AlbumArtist.
     * @example
     * // Create one AlbumArtist
     * const AlbumArtist = await prisma.albumArtist.create({
     *   data: {
     *     // ... data to create a AlbumArtist
     *   }
     * })
     * 
    **/
    create<T extends AlbumArtistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumArtistCreateArgs<ExtArgs>>
    ): Prisma__AlbumArtistClient<$Result.GetResult<Prisma.$AlbumArtistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AlbumArtists.
     *     @param {AlbumArtistCreateManyArgs} args - Arguments to create many AlbumArtists.
     *     @example
     *     // Create many AlbumArtists
     *     const albumArtist = await prisma.albumArtist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumArtistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumArtistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlbumArtist.
     * @param {AlbumArtistDeleteArgs} args - Arguments to delete one AlbumArtist.
     * @example
     * // Delete one AlbumArtist
     * const AlbumArtist = await prisma.albumArtist.delete({
     *   where: {
     *     // ... filter to delete one AlbumArtist
     *   }
     * })
     * 
    **/
    delete<T extends AlbumArtistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumArtistDeleteArgs<ExtArgs>>
    ): Prisma__AlbumArtistClient<$Result.GetResult<Prisma.$AlbumArtistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AlbumArtist.
     * @param {AlbumArtistUpdateArgs} args - Arguments to update one AlbumArtist.
     * @example
     * // Update one AlbumArtist
     * const albumArtist = await prisma.albumArtist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumArtistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumArtistUpdateArgs<ExtArgs>>
    ): Prisma__AlbumArtistClient<$Result.GetResult<Prisma.$AlbumArtistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AlbumArtists.
     * @param {AlbumArtistDeleteManyArgs} args - Arguments to filter AlbumArtists to delete.
     * @example
     * // Delete a few AlbumArtists
     * const { count } = await prisma.albumArtist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumArtistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumArtistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumArtists
     * const albumArtist = await prisma.albumArtist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumArtistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumArtistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlbumArtist.
     * @param {AlbumArtistUpsertArgs} args - Arguments to update or create a AlbumArtist.
     * @example
     * // Update or create a AlbumArtist
     * const albumArtist = await prisma.albumArtist.upsert({
     *   create: {
     *     // ... data to create a AlbumArtist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumArtist we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumArtistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumArtistUpsertArgs<ExtArgs>>
    ): Prisma__AlbumArtistClient<$Result.GetResult<Prisma.$AlbumArtistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AlbumArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumArtistCountArgs} args - Arguments to filter AlbumArtists to count.
     * @example
     * // Count the number of AlbumArtists
     * const count = await prisma.albumArtist.count({
     *   where: {
     *     // ... the filter for the AlbumArtists we want to count
     *   }
     * })
    **/
    count<T extends AlbumArtistCountArgs>(
      args?: Subset<T, AlbumArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumArtistAggregateArgs>(args: Subset<T, AlbumArtistAggregateArgs>): Prisma.PrismaPromise<GetAlbumArtistAggregateType<T>>

    /**
     * Group by AlbumArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumArtistGroupByArgs['orderBy'] }
        : { orderBy?: AlbumArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlbumArtist model
   */
  readonly fields: AlbumArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumArtist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AlbumArtist model
   */ 
  interface AlbumArtistFieldRefs {
    readonly id: FieldRef<"AlbumArtist", 'Int'>
    readonly artistsId: FieldRef<"AlbumArtist", 'Int'>
    readonly albumId: FieldRef<"AlbumArtist", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * AlbumArtist findUnique
   */
  export type AlbumArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
    /**
     * Filter, which AlbumArtist to fetch.
     */
    where: AlbumArtistWhereUniqueInput
  }


  /**
   * AlbumArtist findUniqueOrThrow
   */
  export type AlbumArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
    /**
     * Filter, which AlbumArtist to fetch.
     */
    where: AlbumArtistWhereUniqueInput
  }


  /**
   * AlbumArtist findFirst
   */
  export type AlbumArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
    /**
     * Filter, which AlbumArtist to fetch.
     */
    where?: AlbumArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumArtists to fetch.
     */
    orderBy?: AlbumArtistOrderByWithRelationInput | AlbumArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumArtists.
     */
    cursor?: AlbumArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumArtists.
     */
    distinct?: AlbumArtistScalarFieldEnum | AlbumArtistScalarFieldEnum[]
  }


  /**
   * AlbumArtist findFirstOrThrow
   */
  export type AlbumArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
    /**
     * Filter, which AlbumArtist to fetch.
     */
    where?: AlbumArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumArtists to fetch.
     */
    orderBy?: AlbumArtistOrderByWithRelationInput | AlbumArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumArtists.
     */
    cursor?: AlbumArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumArtists.
     */
    distinct?: AlbumArtistScalarFieldEnum | AlbumArtistScalarFieldEnum[]
  }


  /**
   * AlbumArtist findMany
   */
  export type AlbumArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
    /**
     * Filter, which AlbumArtists to fetch.
     */
    where?: AlbumArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumArtists to fetch.
     */
    orderBy?: AlbumArtistOrderByWithRelationInput | AlbumArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumArtists.
     */
    cursor?: AlbumArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumArtists.
     */
    skip?: number
    distinct?: AlbumArtistScalarFieldEnum | AlbumArtistScalarFieldEnum[]
  }


  /**
   * AlbumArtist create
   */
  export type AlbumArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
    /**
     * The data needed to create a AlbumArtist.
     */
    data: XOR<AlbumArtistCreateInput, AlbumArtistUncheckedCreateInput>
  }


  /**
   * AlbumArtist createMany
   */
  export type AlbumArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlbumArtists.
     */
    data: AlbumArtistCreateManyInput | AlbumArtistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AlbumArtist update
   */
  export type AlbumArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
    /**
     * The data needed to update a AlbumArtist.
     */
    data: XOR<AlbumArtistUpdateInput, AlbumArtistUncheckedUpdateInput>
    /**
     * Choose, which AlbumArtist to update.
     */
    where: AlbumArtistWhereUniqueInput
  }


  /**
   * AlbumArtist updateMany
   */
  export type AlbumArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlbumArtists.
     */
    data: XOR<AlbumArtistUpdateManyMutationInput, AlbumArtistUncheckedUpdateManyInput>
    /**
     * Filter which AlbumArtists to update
     */
    where?: AlbumArtistWhereInput
  }


  /**
   * AlbumArtist upsert
   */
  export type AlbumArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
    /**
     * The filter to search for the AlbumArtist to update in case it exists.
     */
    where: AlbumArtistWhereUniqueInput
    /**
     * In case the AlbumArtist found by the `where` argument doesn't exist, create a new AlbumArtist with this data.
     */
    create: XOR<AlbumArtistCreateInput, AlbumArtistUncheckedCreateInput>
    /**
     * In case the AlbumArtist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumArtistUpdateInput, AlbumArtistUncheckedUpdateInput>
  }


  /**
   * AlbumArtist delete
   */
  export type AlbumArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
    /**
     * Filter which AlbumArtist to delete.
     */
    where: AlbumArtistWhereUniqueInput
  }


  /**
   * AlbumArtist deleteMany
   */
  export type AlbumArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumArtists to delete
     */
    where?: AlbumArtistWhereInput
  }


  /**
   * AlbumArtist without action
   */
  export type AlbumArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumArtist
     */
    select?: AlbumArtistSelect<ExtArgs> | null
  }



  /**
   * Model PlaylistTracks
   */

  export type AggregatePlaylistTracks = {
    _count: PlaylistTracksCountAggregateOutputType | null
    _avg: PlaylistTracksAvgAggregateOutputType | null
    _sum: PlaylistTracksSumAggregateOutputType | null
    _min: PlaylistTracksMinAggregateOutputType | null
    _max: PlaylistTracksMaxAggregateOutputType | null
  }

  export type PlaylistTracksAvgAggregateOutputType = {
    id: number | null
    trackId: number | null
    playlistId: number | null
  }

  export type PlaylistTracksSumAggregateOutputType = {
    id: number | null
    trackId: number | null
    playlistId: number | null
  }

  export type PlaylistTracksMinAggregateOutputType = {
    id: number | null
    trackId: number | null
    playlistId: number | null
  }

  export type PlaylistTracksMaxAggregateOutputType = {
    id: number | null
    trackId: number | null
    playlistId: number | null
  }

  export type PlaylistTracksCountAggregateOutputType = {
    id: number
    trackId: number
    playlistId: number
    _all: number
  }


  export type PlaylistTracksAvgAggregateInputType = {
    id?: true
    trackId?: true
    playlistId?: true
  }

  export type PlaylistTracksSumAggregateInputType = {
    id?: true
    trackId?: true
    playlistId?: true
  }

  export type PlaylistTracksMinAggregateInputType = {
    id?: true
    trackId?: true
    playlistId?: true
  }

  export type PlaylistTracksMaxAggregateInputType = {
    id?: true
    trackId?: true
    playlistId?: true
  }

  export type PlaylistTracksCountAggregateInputType = {
    id?: true
    trackId?: true
    playlistId?: true
    _all?: true
  }

  export type PlaylistTracksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistTracks to aggregate.
     */
    where?: PlaylistTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTracksOrderByWithRelationInput | PlaylistTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistTracks
    **/
    _count?: true | PlaylistTracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistTracksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistTracksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistTracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistTracksMaxAggregateInputType
  }

  export type GetPlaylistTracksAggregateType<T extends PlaylistTracksAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistTracks[P]>
      : GetScalarType<T[P], AggregatePlaylistTracks[P]>
  }




  export type PlaylistTracksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTracksWhereInput
    orderBy?: PlaylistTracksOrderByWithAggregationInput | PlaylistTracksOrderByWithAggregationInput[]
    by: PlaylistTracksScalarFieldEnum[] | PlaylistTracksScalarFieldEnum
    having?: PlaylistTracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistTracksCountAggregateInputType | true
    _avg?: PlaylistTracksAvgAggregateInputType
    _sum?: PlaylistTracksSumAggregateInputType
    _min?: PlaylistTracksMinAggregateInputType
    _max?: PlaylistTracksMaxAggregateInputType
  }

  export type PlaylistTracksGroupByOutputType = {
    id: number
    trackId: number
    playlistId: number
    _count: PlaylistTracksCountAggregateOutputType | null
    _avg: PlaylistTracksAvgAggregateOutputType | null
    _sum: PlaylistTracksSumAggregateOutputType | null
    _min: PlaylistTracksMinAggregateOutputType | null
    _max: PlaylistTracksMaxAggregateOutputType | null
  }

  type GetPlaylistTracksGroupByPayload<T extends PlaylistTracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistTracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistTracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistTracksGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistTracksGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistTracksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackId?: boolean
    playlistId?: boolean
  }, ExtArgs["result"]["playlistTracks"]>

  export type PlaylistTracksSelectScalar = {
    id?: boolean
    trackId?: boolean
    playlistId?: boolean
  }


  export type $PlaylistTracksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistTracks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trackId: number
      playlistId: number
    }, ExtArgs["result"]["playlistTracks"]>
    composites: {}
  }


  type PlaylistTracksGetPayload<S extends boolean | null | undefined | PlaylistTracksDefaultArgs> = $Result.GetResult<Prisma.$PlaylistTracksPayload, S>

  type PlaylistTracksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistTracksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistTracksCountAggregateInputType | true
    }

  export interface PlaylistTracksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistTracks'], meta: { name: 'PlaylistTracks' } }
    /**
     * Find zero or one PlaylistTracks that matches the filter.
     * @param {PlaylistTracksFindUniqueArgs} args - Arguments to find a PlaylistTracks
     * @example
     * // Get one PlaylistTracks
     * const playlistTracks = await prisma.playlistTracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistTracksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistTracksFindUniqueArgs<ExtArgs>>
    ): Prisma__PlaylistTracksClient<$Result.GetResult<Prisma.$PlaylistTracksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PlaylistTracks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistTracksFindUniqueOrThrowArgs} args - Arguments to find a PlaylistTracks
     * @example
     * // Get one PlaylistTracks
     * const playlistTracks = await prisma.playlistTracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistTracksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistTracksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistTracksClient<$Result.GetResult<Prisma.$PlaylistTracksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PlaylistTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTracksFindFirstArgs} args - Arguments to find a PlaylistTracks
     * @example
     * // Get one PlaylistTracks
     * const playlistTracks = await prisma.playlistTracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistTracksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistTracksFindFirstArgs<ExtArgs>>
    ): Prisma__PlaylistTracksClient<$Result.GetResult<Prisma.$PlaylistTracksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PlaylistTracks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTracksFindFirstOrThrowArgs} args - Arguments to find a PlaylistTracks
     * @example
     * // Get one PlaylistTracks
     * const playlistTracks = await prisma.playlistTracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistTracksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistTracksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistTracksClient<$Result.GetResult<Prisma.$PlaylistTracksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PlaylistTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTracksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistTracks
     * const playlistTracks = await prisma.playlistTracks.findMany()
     * 
     * // Get first 10 PlaylistTracks
     * const playlistTracks = await prisma.playlistTracks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistTracksWithIdOnly = await prisma.playlistTracks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaylistTracksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistTracksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTracksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PlaylistTracks.
     * @param {PlaylistTracksCreateArgs} args - Arguments to create a PlaylistTracks.
     * @example
     * // Create one PlaylistTracks
     * const PlaylistTracks = await prisma.playlistTracks.create({
     *   data: {
     *     // ... data to create a PlaylistTracks
     *   }
     * })
     * 
    **/
    create<T extends PlaylistTracksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistTracksCreateArgs<ExtArgs>>
    ): Prisma__PlaylistTracksClient<$Result.GetResult<Prisma.$PlaylistTracksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PlaylistTracks.
     *     @param {PlaylistTracksCreateManyArgs} args - Arguments to create many PlaylistTracks.
     *     @example
     *     // Create many PlaylistTracks
     *     const playlistTracks = await prisma.playlistTracks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistTracksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistTracksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlaylistTracks.
     * @param {PlaylistTracksDeleteArgs} args - Arguments to delete one PlaylistTracks.
     * @example
     * // Delete one PlaylistTracks
     * const PlaylistTracks = await prisma.playlistTracks.delete({
     *   where: {
     *     // ... filter to delete one PlaylistTracks
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistTracksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistTracksDeleteArgs<ExtArgs>>
    ): Prisma__PlaylistTracksClient<$Result.GetResult<Prisma.$PlaylistTracksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PlaylistTracks.
     * @param {PlaylistTracksUpdateArgs} args - Arguments to update one PlaylistTracks.
     * @example
     * // Update one PlaylistTracks
     * const playlistTracks = await prisma.playlistTracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistTracksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistTracksUpdateArgs<ExtArgs>>
    ): Prisma__PlaylistTracksClient<$Result.GetResult<Prisma.$PlaylistTracksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PlaylistTracks.
     * @param {PlaylistTracksDeleteManyArgs} args - Arguments to filter PlaylistTracks to delete.
     * @example
     * // Delete a few PlaylistTracks
     * const { count } = await prisma.playlistTracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistTracksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistTracksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistTracks
     * const playlistTracks = await prisma.playlistTracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistTracksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistTracksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlaylistTracks.
     * @param {PlaylistTracksUpsertArgs} args - Arguments to update or create a PlaylistTracks.
     * @example
     * // Update or create a PlaylistTracks
     * const playlistTracks = await prisma.playlistTracks.upsert({
     *   create: {
     *     // ... data to create a PlaylistTracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistTracks we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistTracksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistTracksUpsertArgs<ExtArgs>>
    ): Prisma__PlaylistTracksClient<$Result.GetResult<Prisma.$PlaylistTracksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PlaylistTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTracksCountArgs} args - Arguments to filter PlaylistTracks to count.
     * @example
     * // Count the number of PlaylistTracks
     * const count = await prisma.playlistTracks.count({
     *   where: {
     *     // ... the filter for the PlaylistTracks we want to count
     *   }
     * })
    **/
    count<T extends PlaylistTracksCountArgs>(
      args?: Subset<T, PlaylistTracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistTracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistTracksAggregateArgs>(args: Subset<T, PlaylistTracksAggregateArgs>): Prisma.PrismaPromise<GetPlaylistTracksAggregateType<T>>

    /**
     * Group by PlaylistTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTracksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistTracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistTracksGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistTracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistTracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistTracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistTracks model
   */
  readonly fields: PlaylistTracksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistTracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistTracksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PlaylistTracks model
   */ 
  interface PlaylistTracksFieldRefs {
    readonly id: FieldRef<"PlaylistTracks", 'Int'>
    readonly trackId: FieldRef<"PlaylistTracks", 'Int'>
    readonly playlistId: FieldRef<"PlaylistTracks", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PlaylistTracks findUnique
   */
  export type PlaylistTracksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
    /**
     * Filter, which PlaylistTracks to fetch.
     */
    where: PlaylistTracksWhereUniqueInput
  }


  /**
   * PlaylistTracks findUniqueOrThrow
   */
  export type PlaylistTracksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
    /**
     * Filter, which PlaylistTracks to fetch.
     */
    where: PlaylistTracksWhereUniqueInput
  }


  /**
   * PlaylistTracks findFirst
   */
  export type PlaylistTracksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
    /**
     * Filter, which PlaylistTracks to fetch.
     */
    where?: PlaylistTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTracksOrderByWithRelationInput | PlaylistTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistTracks.
     */
    cursor?: PlaylistTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistTracks.
     */
    distinct?: PlaylistTracksScalarFieldEnum | PlaylistTracksScalarFieldEnum[]
  }


  /**
   * PlaylistTracks findFirstOrThrow
   */
  export type PlaylistTracksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
    /**
     * Filter, which PlaylistTracks to fetch.
     */
    where?: PlaylistTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTracksOrderByWithRelationInput | PlaylistTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistTracks.
     */
    cursor?: PlaylistTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistTracks.
     */
    distinct?: PlaylistTracksScalarFieldEnum | PlaylistTracksScalarFieldEnum[]
  }


  /**
   * PlaylistTracks findMany
   */
  export type PlaylistTracksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
    /**
     * Filter, which PlaylistTracks to fetch.
     */
    where?: PlaylistTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTracks to fetch.
     */
    orderBy?: PlaylistTracksOrderByWithRelationInput | PlaylistTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistTracks.
     */
    cursor?: PlaylistTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTracks.
     */
    skip?: number
    distinct?: PlaylistTracksScalarFieldEnum | PlaylistTracksScalarFieldEnum[]
  }


  /**
   * PlaylistTracks create
   */
  export type PlaylistTracksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
    /**
     * The data needed to create a PlaylistTracks.
     */
    data: XOR<PlaylistTracksCreateInput, PlaylistTracksUncheckedCreateInput>
  }


  /**
   * PlaylistTracks createMany
   */
  export type PlaylistTracksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistTracks.
     */
    data: PlaylistTracksCreateManyInput | PlaylistTracksCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PlaylistTracks update
   */
  export type PlaylistTracksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
    /**
     * The data needed to update a PlaylistTracks.
     */
    data: XOR<PlaylistTracksUpdateInput, PlaylistTracksUncheckedUpdateInput>
    /**
     * Choose, which PlaylistTracks to update.
     */
    where: PlaylistTracksWhereUniqueInput
  }


  /**
   * PlaylistTracks updateMany
   */
  export type PlaylistTracksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistTracks.
     */
    data: XOR<PlaylistTracksUpdateManyMutationInput, PlaylistTracksUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistTracks to update
     */
    where?: PlaylistTracksWhereInput
  }


  /**
   * PlaylistTracks upsert
   */
  export type PlaylistTracksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
    /**
     * The filter to search for the PlaylistTracks to update in case it exists.
     */
    where: PlaylistTracksWhereUniqueInput
    /**
     * In case the PlaylistTracks found by the `where` argument doesn't exist, create a new PlaylistTracks with this data.
     */
    create: XOR<PlaylistTracksCreateInput, PlaylistTracksUncheckedCreateInput>
    /**
     * In case the PlaylistTracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistTracksUpdateInput, PlaylistTracksUncheckedUpdateInput>
  }


  /**
   * PlaylistTracks delete
   */
  export type PlaylistTracksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
    /**
     * Filter which PlaylistTracks to delete.
     */
    where: PlaylistTracksWhereUniqueInput
  }


  /**
   * PlaylistTracks deleteMany
   */
  export type PlaylistTracksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistTracks to delete
     */
    where?: PlaylistTracksWhereInput
  }


  /**
   * PlaylistTracks without action
   */
  export type PlaylistTracksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTracks
     */
    select?: PlaylistTracksSelect<ExtArgs> | null
  }



  /**
   * Model LikedTracks
   */

  export type AggregateLikedTracks = {
    _count: LikedTracksCountAggregateOutputType | null
    _avg: LikedTracksAvgAggregateOutputType | null
    _sum: LikedTracksSumAggregateOutputType | null
    _min: LikedTracksMinAggregateOutputType | null
    _max: LikedTracksMaxAggregateOutputType | null
  }

  export type LikedTracksAvgAggregateOutputType = {
    id: number | null
    trackId: number | null
    UserId: number | null
  }

  export type LikedTracksSumAggregateOutputType = {
    id: number | null
    trackId: number | null
    UserId: number | null
  }

  export type LikedTracksMinAggregateOutputType = {
    id: number | null
    trackId: number | null
    UserId: number | null
  }

  export type LikedTracksMaxAggregateOutputType = {
    id: number | null
    trackId: number | null
    UserId: number | null
  }

  export type LikedTracksCountAggregateOutputType = {
    id: number
    trackId: number
    UserId: number
    _all: number
  }


  export type LikedTracksAvgAggregateInputType = {
    id?: true
    trackId?: true
    UserId?: true
  }

  export type LikedTracksSumAggregateInputType = {
    id?: true
    trackId?: true
    UserId?: true
  }

  export type LikedTracksMinAggregateInputType = {
    id?: true
    trackId?: true
    UserId?: true
  }

  export type LikedTracksMaxAggregateInputType = {
    id?: true
    trackId?: true
    UserId?: true
  }

  export type LikedTracksCountAggregateInputType = {
    id?: true
    trackId?: true
    UserId?: true
    _all?: true
  }

  export type LikedTracksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedTracks to aggregate.
     */
    where?: LikedTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedTracks to fetch.
     */
    orderBy?: LikedTracksOrderByWithRelationInput | LikedTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedTracks
    **/
    _count?: true | LikedTracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikedTracksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikedTracksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedTracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedTracksMaxAggregateInputType
  }

  export type GetLikedTracksAggregateType<T extends LikedTracksAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedTracks[P]>
      : GetScalarType<T[P], AggregateLikedTracks[P]>
  }




  export type LikedTracksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedTracksWhereInput
    orderBy?: LikedTracksOrderByWithAggregationInput | LikedTracksOrderByWithAggregationInput[]
    by: LikedTracksScalarFieldEnum[] | LikedTracksScalarFieldEnum
    having?: LikedTracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedTracksCountAggregateInputType | true
    _avg?: LikedTracksAvgAggregateInputType
    _sum?: LikedTracksSumAggregateInputType
    _min?: LikedTracksMinAggregateInputType
    _max?: LikedTracksMaxAggregateInputType
  }

  export type LikedTracksGroupByOutputType = {
    id: number
    trackId: number
    UserId: number
    _count: LikedTracksCountAggregateOutputType | null
    _avg: LikedTracksAvgAggregateOutputType | null
    _sum: LikedTracksSumAggregateOutputType | null
    _min: LikedTracksMinAggregateOutputType | null
    _max: LikedTracksMaxAggregateOutputType | null
  }

  type GetLikedTracksGroupByPayload<T extends LikedTracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedTracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedTracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedTracksGroupByOutputType[P]>
            : GetScalarType<T[P], LikedTracksGroupByOutputType[P]>
        }
      >
    >


  export type LikedTracksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackId?: boolean
    UserId?: boolean
  }, ExtArgs["result"]["likedTracks"]>

  export type LikedTracksSelectScalar = {
    id?: boolean
    trackId?: boolean
    UserId?: boolean
  }


  export type $LikedTracksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedTracks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trackId: number
      UserId: number
    }, ExtArgs["result"]["likedTracks"]>
    composites: {}
  }


  type LikedTracksGetPayload<S extends boolean | null | undefined | LikedTracksDefaultArgs> = $Result.GetResult<Prisma.$LikedTracksPayload, S>

  type LikedTracksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikedTracksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikedTracksCountAggregateInputType | true
    }

  export interface LikedTracksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedTracks'], meta: { name: 'LikedTracks' } }
    /**
     * Find zero or one LikedTracks that matches the filter.
     * @param {LikedTracksFindUniqueArgs} args - Arguments to find a LikedTracks
     * @example
     * // Get one LikedTracks
     * const likedTracks = await prisma.likedTracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikedTracksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikedTracksFindUniqueArgs<ExtArgs>>
    ): Prisma__LikedTracksClient<$Result.GetResult<Prisma.$LikedTracksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LikedTracks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LikedTracksFindUniqueOrThrowArgs} args - Arguments to find a LikedTracks
     * @example
     * // Get one LikedTracks
     * const likedTracks = await prisma.likedTracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikedTracksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedTracksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikedTracksClient<$Result.GetResult<Prisma.$LikedTracksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LikedTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedTracksFindFirstArgs} args - Arguments to find a LikedTracks
     * @example
     * // Get one LikedTracks
     * const likedTracks = await prisma.likedTracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikedTracksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedTracksFindFirstArgs<ExtArgs>>
    ): Prisma__LikedTracksClient<$Result.GetResult<Prisma.$LikedTracksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LikedTracks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedTracksFindFirstOrThrowArgs} args - Arguments to find a LikedTracks
     * @example
     * // Get one LikedTracks
     * const likedTracks = await prisma.likedTracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikedTracksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedTracksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikedTracksClient<$Result.GetResult<Prisma.$LikedTracksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LikedTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedTracksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedTracks
     * const likedTracks = await prisma.likedTracks.findMany()
     * 
     * // Get first 10 LikedTracks
     * const likedTracks = await prisma.likedTracks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedTracksWithIdOnly = await prisma.likedTracks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikedTracksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedTracksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedTracksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LikedTracks.
     * @param {LikedTracksCreateArgs} args - Arguments to create a LikedTracks.
     * @example
     * // Create one LikedTracks
     * const LikedTracks = await prisma.likedTracks.create({
     *   data: {
     *     // ... data to create a LikedTracks
     *   }
     * })
     * 
    **/
    create<T extends LikedTracksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedTracksCreateArgs<ExtArgs>>
    ): Prisma__LikedTracksClient<$Result.GetResult<Prisma.$LikedTracksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LikedTracks.
     *     @param {LikedTracksCreateManyArgs} args - Arguments to create many LikedTracks.
     *     @example
     *     // Create many LikedTracks
     *     const likedTracks = await prisma.likedTracks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikedTracksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedTracksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikedTracks.
     * @param {LikedTracksDeleteArgs} args - Arguments to delete one LikedTracks.
     * @example
     * // Delete one LikedTracks
     * const LikedTracks = await prisma.likedTracks.delete({
     *   where: {
     *     // ... filter to delete one LikedTracks
     *   }
     * })
     * 
    **/
    delete<T extends LikedTracksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikedTracksDeleteArgs<ExtArgs>>
    ): Prisma__LikedTracksClient<$Result.GetResult<Prisma.$LikedTracksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LikedTracks.
     * @param {LikedTracksUpdateArgs} args - Arguments to update one LikedTracks.
     * @example
     * // Update one LikedTracks
     * const likedTracks = await prisma.likedTracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikedTracksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedTracksUpdateArgs<ExtArgs>>
    ): Prisma__LikedTracksClient<$Result.GetResult<Prisma.$LikedTracksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LikedTracks.
     * @param {LikedTracksDeleteManyArgs} args - Arguments to filter LikedTracks to delete.
     * @example
     * // Delete a few LikedTracks
     * const { count } = await prisma.likedTracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikedTracksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedTracksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedTracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedTracks
     * const likedTracks = await prisma.likedTracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikedTracksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikedTracksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedTracks.
     * @param {LikedTracksUpsertArgs} args - Arguments to update or create a LikedTracks.
     * @example
     * // Update or create a LikedTracks
     * const likedTracks = await prisma.likedTracks.upsert({
     *   create: {
     *     // ... data to create a LikedTracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedTracks we want to update
     *   }
     * })
    **/
    upsert<T extends LikedTracksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikedTracksUpsertArgs<ExtArgs>>
    ): Prisma__LikedTracksClient<$Result.GetResult<Prisma.$LikedTracksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LikedTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedTracksCountArgs} args - Arguments to filter LikedTracks to count.
     * @example
     * // Count the number of LikedTracks
     * const count = await prisma.likedTracks.count({
     *   where: {
     *     // ... the filter for the LikedTracks we want to count
     *   }
     * })
    **/
    count<T extends LikedTracksCountArgs>(
      args?: Subset<T, LikedTracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedTracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedTracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedTracksAggregateArgs>(args: Subset<T, LikedTracksAggregateArgs>): Prisma.PrismaPromise<GetLikedTracksAggregateType<T>>

    /**
     * Group by LikedTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedTracksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedTracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedTracksGroupByArgs['orderBy'] }
        : { orderBy?: LikedTracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedTracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedTracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedTracks model
   */
  readonly fields: LikedTracksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedTracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedTracksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LikedTracks model
   */ 
  interface LikedTracksFieldRefs {
    readonly id: FieldRef<"LikedTracks", 'Int'>
    readonly trackId: FieldRef<"LikedTracks", 'Int'>
    readonly UserId: FieldRef<"LikedTracks", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * LikedTracks findUnique
   */
  export type LikedTracksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
    /**
     * Filter, which LikedTracks to fetch.
     */
    where: LikedTracksWhereUniqueInput
  }


  /**
   * LikedTracks findUniqueOrThrow
   */
  export type LikedTracksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
    /**
     * Filter, which LikedTracks to fetch.
     */
    where: LikedTracksWhereUniqueInput
  }


  /**
   * LikedTracks findFirst
   */
  export type LikedTracksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
    /**
     * Filter, which LikedTracks to fetch.
     */
    where?: LikedTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedTracks to fetch.
     */
    orderBy?: LikedTracksOrderByWithRelationInput | LikedTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedTracks.
     */
    cursor?: LikedTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedTracks.
     */
    distinct?: LikedTracksScalarFieldEnum | LikedTracksScalarFieldEnum[]
  }


  /**
   * LikedTracks findFirstOrThrow
   */
  export type LikedTracksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
    /**
     * Filter, which LikedTracks to fetch.
     */
    where?: LikedTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedTracks to fetch.
     */
    orderBy?: LikedTracksOrderByWithRelationInput | LikedTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedTracks.
     */
    cursor?: LikedTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedTracks.
     */
    distinct?: LikedTracksScalarFieldEnum | LikedTracksScalarFieldEnum[]
  }


  /**
   * LikedTracks findMany
   */
  export type LikedTracksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
    /**
     * Filter, which LikedTracks to fetch.
     */
    where?: LikedTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedTracks to fetch.
     */
    orderBy?: LikedTracksOrderByWithRelationInput | LikedTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedTracks.
     */
    cursor?: LikedTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedTracks.
     */
    skip?: number
    distinct?: LikedTracksScalarFieldEnum | LikedTracksScalarFieldEnum[]
  }


  /**
   * LikedTracks create
   */
  export type LikedTracksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
    /**
     * The data needed to create a LikedTracks.
     */
    data: XOR<LikedTracksCreateInput, LikedTracksUncheckedCreateInput>
  }


  /**
   * LikedTracks createMany
   */
  export type LikedTracksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedTracks.
     */
    data: LikedTracksCreateManyInput | LikedTracksCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LikedTracks update
   */
  export type LikedTracksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
    /**
     * The data needed to update a LikedTracks.
     */
    data: XOR<LikedTracksUpdateInput, LikedTracksUncheckedUpdateInput>
    /**
     * Choose, which LikedTracks to update.
     */
    where: LikedTracksWhereUniqueInput
  }


  /**
   * LikedTracks updateMany
   */
  export type LikedTracksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedTracks.
     */
    data: XOR<LikedTracksUpdateManyMutationInput, LikedTracksUncheckedUpdateManyInput>
    /**
     * Filter which LikedTracks to update
     */
    where?: LikedTracksWhereInput
  }


  /**
   * LikedTracks upsert
   */
  export type LikedTracksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
    /**
     * The filter to search for the LikedTracks to update in case it exists.
     */
    where: LikedTracksWhereUniqueInput
    /**
     * In case the LikedTracks found by the `where` argument doesn't exist, create a new LikedTracks with this data.
     */
    create: XOR<LikedTracksCreateInput, LikedTracksUncheckedCreateInput>
    /**
     * In case the LikedTracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedTracksUpdateInput, LikedTracksUncheckedUpdateInput>
  }


  /**
   * LikedTracks delete
   */
  export type LikedTracksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
    /**
     * Filter which LikedTracks to delete.
     */
    where: LikedTracksWhereUniqueInput
  }


  /**
   * LikedTracks deleteMany
   */
  export type LikedTracksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedTracks to delete
     */
    where?: LikedTracksWhereInput
  }


  /**
   * LikedTracks without action
   */
  export type LikedTracksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedTracks
     */
    select?: LikedTracksSelect<ExtArgs> | null
  }



  /**
   * Model FollowPlaylist
   */

  export type AggregateFollowPlaylist = {
    _count: FollowPlaylistCountAggregateOutputType | null
    _avg: FollowPlaylistAvgAggregateOutputType | null
    _sum: FollowPlaylistSumAggregateOutputType | null
    _min: FollowPlaylistMinAggregateOutputType | null
    _max: FollowPlaylistMaxAggregateOutputType | null
  }

  export type FollowPlaylistAvgAggregateOutputType = {
    id: number | null
    PlaylistId: number | null
    UserId: number | null
  }

  export type FollowPlaylistSumAggregateOutputType = {
    id: number | null
    PlaylistId: number | null
    UserId: number | null
  }

  export type FollowPlaylistMinAggregateOutputType = {
    id: number | null
    PlaylistId: number | null
    UserId: number | null
  }

  export type FollowPlaylistMaxAggregateOutputType = {
    id: number | null
    PlaylistId: number | null
    UserId: number | null
  }

  export type FollowPlaylistCountAggregateOutputType = {
    id: number
    PlaylistId: number
    UserId: number
    _all: number
  }


  export type FollowPlaylistAvgAggregateInputType = {
    id?: true
    PlaylistId?: true
    UserId?: true
  }

  export type FollowPlaylistSumAggregateInputType = {
    id?: true
    PlaylistId?: true
    UserId?: true
  }

  export type FollowPlaylistMinAggregateInputType = {
    id?: true
    PlaylistId?: true
    UserId?: true
  }

  export type FollowPlaylistMaxAggregateInputType = {
    id?: true
    PlaylistId?: true
    UserId?: true
  }

  export type FollowPlaylistCountAggregateInputType = {
    id?: true
    PlaylistId?: true
    UserId?: true
    _all?: true
  }

  export type FollowPlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowPlaylist to aggregate.
     */
    where?: FollowPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowPlaylists to fetch.
     */
    orderBy?: FollowPlaylistOrderByWithRelationInput | FollowPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowPlaylists
    **/
    _count?: true | FollowPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowPlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowPlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowPlaylistMaxAggregateInputType
  }

  export type GetFollowPlaylistAggregateType<T extends FollowPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowPlaylist[P]>
      : GetScalarType<T[P], AggregateFollowPlaylist[P]>
  }




  export type FollowPlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowPlaylistWhereInput
    orderBy?: FollowPlaylistOrderByWithAggregationInput | FollowPlaylistOrderByWithAggregationInput[]
    by: FollowPlaylistScalarFieldEnum[] | FollowPlaylistScalarFieldEnum
    having?: FollowPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowPlaylistCountAggregateInputType | true
    _avg?: FollowPlaylistAvgAggregateInputType
    _sum?: FollowPlaylistSumAggregateInputType
    _min?: FollowPlaylistMinAggregateInputType
    _max?: FollowPlaylistMaxAggregateInputType
  }

  export type FollowPlaylistGroupByOutputType = {
    id: number
    PlaylistId: number
    UserId: number
    _count: FollowPlaylistCountAggregateOutputType | null
    _avg: FollowPlaylistAvgAggregateOutputType | null
    _sum: FollowPlaylistSumAggregateOutputType | null
    _min: FollowPlaylistMinAggregateOutputType | null
    _max: FollowPlaylistMaxAggregateOutputType | null
  }

  type GetFollowPlaylistGroupByPayload<T extends FollowPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], FollowPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type FollowPlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    PlaylistId?: boolean
    UserId?: boolean
  }, ExtArgs["result"]["followPlaylist"]>

  export type FollowPlaylistSelectScalar = {
    id?: boolean
    PlaylistId?: boolean
    UserId?: boolean
  }


  export type $FollowPlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowPlaylist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      PlaylistId: number
      UserId: number
    }, ExtArgs["result"]["followPlaylist"]>
    composites: {}
  }


  type FollowPlaylistGetPayload<S extends boolean | null | undefined | FollowPlaylistDefaultArgs> = $Result.GetResult<Prisma.$FollowPlaylistPayload, S>

  type FollowPlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowPlaylistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowPlaylistCountAggregateInputType | true
    }

  export interface FollowPlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowPlaylist'], meta: { name: 'FollowPlaylist' } }
    /**
     * Find zero or one FollowPlaylist that matches the filter.
     * @param {FollowPlaylistFindUniqueArgs} args - Arguments to find a FollowPlaylist
     * @example
     * // Get one FollowPlaylist
     * const followPlaylist = await prisma.followPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowPlaylistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FollowPlaylistFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowPlaylistClient<$Result.GetResult<Prisma.$FollowPlaylistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FollowPlaylist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowPlaylistFindUniqueOrThrowArgs} args - Arguments to find a FollowPlaylist
     * @example
     * // Get one FollowPlaylist
     * const followPlaylist = await prisma.followPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowPlaylistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowPlaylistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowPlaylistClient<$Result.GetResult<Prisma.$FollowPlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FollowPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowPlaylistFindFirstArgs} args - Arguments to find a FollowPlaylist
     * @example
     * // Get one FollowPlaylist
     * const followPlaylist = await prisma.followPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowPlaylistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowPlaylistFindFirstArgs<ExtArgs>>
    ): Prisma__FollowPlaylistClient<$Result.GetResult<Prisma.$FollowPlaylistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FollowPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowPlaylistFindFirstOrThrowArgs} args - Arguments to find a FollowPlaylist
     * @example
     * // Get one FollowPlaylist
     * const followPlaylist = await prisma.followPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowPlaylistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowPlaylistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowPlaylistClient<$Result.GetResult<Prisma.$FollowPlaylistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FollowPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowPlaylistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowPlaylists
     * const followPlaylists = await prisma.followPlaylist.findMany()
     * 
     * // Get first 10 FollowPlaylists
     * const followPlaylists = await prisma.followPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followPlaylistWithIdOnly = await prisma.followPlaylist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FollowPlaylistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowPlaylistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPlaylistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FollowPlaylist.
     * @param {FollowPlaylistCreateArgs} args - Arguments to create a FollowPlaylist.
     * @example
     * // Create one FollowPlaylist
     * const FollowPlaylist = await prisma.followPlaylist.create({
     *   data: {
     *     // ... data to create a FollowPlaylist
     *   }
     * })
     * 
    **/
    create<T extends FollowPlaylistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowPlaylistCreateArgs<ExtArgs>>
    ): Prisma__FollowPlaylistClient<$Result.GetResult<Prisma.$FollowPlaylistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FollowPlaylists.
     *     @param {FollowPlaylistCreateManyArgs} args - Arguments to create many FollowPlaylists.
     *     @example
     *     // Create many FollowPlaylists
     *     const followPlaylist = await prisma.followPlaylist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowPlaylistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowPlaylistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FollowPlaylist.
     * @param {FollowPlaylistDeleteArgs} args - Arguments to delete one FollowPlaylist.
     * @example
     * // Delete one FollowPlaylist
     * const FollowPlaylist = await prisma.followPlaylist.delete({
     *   where: {
     *     // ... filter to delete one FollowPlaylist
     *   }
     * })
     * 
    **/
    delete<T extends FollowPlaylistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FollowPlaylistDeleteArgs<ExtArgs>>
    ): Prisma__FollowPlaylistClient<$Result.GetResult<Prisma.$FollowPlaylistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FollowPlaylist.
     * @param {FollowPlaylistUpdateArgs} args - Arguments to update one FollowPlaylist.
     * @example
     * // Update one FollowPlaylist
     * const followPlaylist = await prisma.followPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowPlaylistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowPlaylistUpdateArgs<ExtArgs>>
    ): Prisma__FollowPlaylistClient<$Result.GetResult<Prisma.$FollowPlaylistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FollowPlaylists.
     * @param {FollowPlaylistDeleteManyArgs} args - Arguments to filter FollowPlaylists to delete.
     * @example
     * // Delete a few FollowPlaylists
     * const { count } = await prisma.followPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowPlaylistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowPlaylistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowPlaylists
     * const followPlaylist = await prisma.followPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowPlaylistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FollowPlaylistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FollowPlaylist.
     * @param {FollowPlaylistUpsertArgs} args - Arguments to update or create a FollowPlaylist.
     * @example
     * // Update or create a FollowPlaylist
     * const followPlaylist = await prisma.followPlaylist.upsert({
     *   create: {
     *     // ... data to create a FollowPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowPlaylist we want to update
     *   }
     * })
    **/
    upsert<T extends FollowPlaylistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FollowPlaylistUpsertArgs<ExtArgs>>
    ): Prisma__FollowPlaylistClient<$Result.GetResult<Prisma.$FollowPlaylistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FollowPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowPlaylistCountArgs} args - Arguments to filter FollowPlaylists to count.
     * @example
     * // Count the number of FollowPlaylists
     * const count = await prisma.followPlaylist.count({
     *   where: {
     *     // ... the filter for the FollowPlaylists we want to count
     *   }
     * })
    **/
    count<T extends FollowPlaylistCountArgs>(
      args?: Subset<T, FollowPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowPlaylistAggregateArgs>(args: Subset<T, FollowPlaylistAggregateArgs>): Prisma.PrismaPromise<GetFollowPlaylistAggregateType<T>>

    /**
     * Group by FollowPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowPlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: FollowPlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowPlaylist model
   */
  readonly fields: FollowPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowPlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FollowPlaylist model
   */ 
  interface FollowPlaylistFieldRefs {
    readonly id: FieldRef<"FollowPlaylist", 'Int'>
    readonly PlaylistId: FieldRef<"FollowPlaylist", 'Int'>
    readonly UserId: FieldRef<"FollowPlaylist", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * FollowPlaylist findUnique
   */
  export type FollowPlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
    /**
     * Filter, which FollowPlaylist to fetch.
     */
    where: FollowPlaylistWhereUniqueInput
  }


  /**
   * FollowPlaylist findUniqueOrThrow
   */
  export type FollowPlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
    /**
     * Filter, which FollowPlaylist to fetch.
     */
    where: FollowPlaylistWhereUniqueInput
  }


  /**
   * FollowPlaylist findFirst
   */
  export type FollowPlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
    /**
     * Filter, which FollowPlaylist to fetch.
     */
    where?: FollowPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowPlaylists to fetch.
     */
    orderBy?: FollowPlaylistOrderByWithRelationInput | FollowPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowPlaylists.
     */
    cursor?: FollowPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowPlaylists.
     */
    distinct?: FollowPlaylistScalarFieldEnum | FollowPlaylistScalarFieldEnum[]
  }


  /**
   * FollowPlaylist findFirstOrThrow
   */
  export type FollowPlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
    /**
     * Filter, which FollowPlaylist to fetch.
     */
    where?: FollowPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowPlaylists to fetch.
     */
    orderBy?: FollowPlaylistOrderByWithRelationInput | FollowPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowPlaylists.
     */
    cursor?: FollowPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowPlaylists.
     */
    distinct?: FollowPlaylistScalarFieldEnum | FollowPlaylistScalarFieldEnum[]
  }


  /**
   * FollowPlaylist findMany
   */
  export type FollowPlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
    /**
     * Filter, which FollowPlaylists to fetch.
     */
    where?: FollowPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowPlaylists to fetch.
     */
    orderBy?: FollowPlaylistOrderByWithRelationInput | FollowPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowPlaylists.
     */
    cursor?: FollowPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowPlaylists.
     */
    skip?: number
    distinct?: FollowPlaylistScalarFieldEnum | FollowPlaylistScalarFieldEnum[]
  }


  /**
   * FollowPlaylist create
   */
  export type FollowPlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
    /**
     * The data needed to create a FollowPlaylist.
     */
    data: XOR<FollowPlaylistCreateInput, FollowPlaylistUncheckedCreateInput>
  }


  /**
   * FollowPlaylist createMany
   */
  export type FollowPlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowPlaylists.
     */
    data: FollowPlaylistCreateManyInput | FollowPlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FollowPlaylist update
   */
  export type FollowPlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
    /**
     * The data needed to update a FollowPlaylist.
     */
    data: XOR<FollowPlaylistUpdateInput, FollowPlaylistUncheckedUpdateInput>
    /**
     * Choose, which FollowPlaylist to update.
     */
    where: FollowPlaylistWhereUniqueInput
  }


  /**
   * FollowPlaylist updateMany
   */
  export type FollowPlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowPlaylists.
     */
    data: XOR<FollowPlaylistUpdateManyMutationInput, FollowPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which FollowPlaylists to update
     */
    where?: FollowPlaylistWhereInput
  }


  /**
   * FollowPlaylist upsert
   */
  export type FollowPlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
    /**
     * The filter to search for the FollowPlaylist to update in case it exists.
     */
    where: FollowPlaylistWhereUniqueInput
    /**
     * In case the FollowPlaylist found by the `where` argument doesn't exist, create a new FollowPlaylist with this data.
     */
    create: XOR<FollowPlaylistCreateInput, FollowPlaylistUncheckedCreateInput>
    /**
     * In case the FollowPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowPlaylistUpdateInput, FollowPlaylistUncheckedUpdateInput>
  }


  /**
   * FollowPlaylist delete
   */
  export type FollowPlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
    /**
     * Filter which FollowPlaylist to delete.
     */
    where: FollowPlaylistWhereUniqueInput
  }


  /**
   * FollowPlaylist deleteMany
   */
  export type FollowPlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowPlaylists to delete
     */
    where?: FollowPlaylistWhereInput
  }


  /**
   * FollowPlaylist without action
   */
  export type FollowPlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowPlaylist
     */
    select?: FollowPlaylistSelect<ExtArgs> | null
  }



  /**
   * Model LikedAlbums
   */

  export type AggregateLikedAlbums = {
    _count: LikedAlbumsCountAggregateOutputType | null
    _avg: LikedAlbumsAvgAggregateOutputType | null
    _sum: LikedAlbumsSumAggregateOutputType | null
    _min: LikedAlbumsMinAggregateOutputType | null
    _max: LikedAlbumsMaxAggregateOutputType | null
  }

  export type LikedAlbumsAvgAggregateOutputType = {
    id: number | null
    AlbumId: number | null
    UserId: number | null
  }

  export type LikedAlbumsSumAggregateOutputType = {
    id: number | null
    AlbumId: number | null
    UserId: number | null
  }

  export type LikedAlbumsMinAggregateOutputType = {
    id: number | null
    AlbumId: number | null
    UserId: number | null
  }

  export type LikedAlbumsMaxAggregateOutputType = {
    id: number | null
    AlbumId: number | null
    UserId: number | null
  }

  export type LikedAlbumsCountAggregateOutputType = {
    id: number
    AlbumId: number
    UserId: number
    _all: number
  }


  export type LikedAlbumsAvgAggregateInputType = {
    id?: true
    AlbumId?: true
    UserId?: true
  }

  export type LikedAlbumsSumAggregateInputType = {
    id?: true
    AlbumId?: true
    UserId?: true
  }

  export type LikedAlbumsMinAggregateInputType = {
    id?: true
    AlbumId?: true
    UserId?: true
  }

  export type LikedAlbumsMaxAggregateInputType = {
    id?: true
    AlbumId?: true
    UserId?: true
  }

  export type LikedAlbumsCountAggregateInputType = {
    id?: true
    AlbumId?: true
    UserId?: true
    _all?: true
  }

  export type LikedAlbumsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedAlbums to aggregate.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedAlbums
    **/
    _count?: true | LikedAlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikedAlbumsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikedAlbumsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedAlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedAlbumsMaxAggregateInputType
  }

  export type GetLikedAlbumsAggregateType<T extends LikedAlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedAlbums[P]>
      : GetScalarType<T[P], AggregateLikedAlbums[P]>
  }




  export type LikedAlbumsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumsWhereInput
    orderBy?: LikedAlbumsOrderByWithAggregationInput | LikedAlbumsOrderByWithAggregationInput[]
    by: LikedAlbumsScalarFieldEnum[] | LikedAlbumsScalarFieldEnum
    having?: LikedAlbumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedAlbumsCountAggregateInputType | true
    _avg?: LikedAlbumsAvgAggregateInputType
    _sum?: LikedAlbumsSumAggregateInputType
    _min?: LikedAlbumsMinAggregateInputType
    _max?: LikedAlbumsMaxAggregateInputType
  }

  export type LikedAlbumsGroupByOutputType = {
    id: number
    AlbumId: number
    UserId: number
    _count: LikedAlbumsCountAggregateOutputType | null
    _avg: LikedAlbumsAvgAggregateOutputType | null
    _sum: LikedAlbumsSumAggregateOutputType | null
    _min: LikedAlbumsMinAggregateOutputType | null
    _max: LikedAlbumsMaxAggregateOutputType | null
  }

  type GetLikedAlbumsGroupByPayload<T extends LikedAlbumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedAlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedAlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedAlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], LikedAlbumsGroupByOutputType[P]>
        }
      >
    >


  export type LikedAlbumsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    AlbumId?: boolean
    UserId?: boolean
  }, ExtArgs["result"]["likedAlbums"]>

  export type LikedAlbumsSelectScalar = {
    id?: boolean
    AlbumId?: boolean
    UserId?: boolean
  }


  export type $LikedAlbumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedAlbums"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      AlbumId: number
      UserId: number
    }, ExtArgs["result"]["likedAlbums"]>
    composites: {}
  }


  type LikedAlbumsGetPayload<S extends boolean | null | undefined | LikedAlbumsDefaultArgs> = $Result.GetResult<Prisma.$LikedAlbumsPayload, S>

  type LikedAlbumsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikedAlbumsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikedAlbumsCountAggregateInputType | true
    }

  export interface LikedAlbumsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedAlbums'], meta: { name: 'LikedAlbums' } }
    /**
     * Find zero or one LikedAlbums that matches the filter.
     * @param {LikedAlbumsFindUniqueArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikedAlbumsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsFindUniqueArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LikedAlbums that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LikedAlbumsFindUniqueOrThrowArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikedAlbumsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LikedAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsFindFirstArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikedAlbumsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsFindFirstArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LikedAlbums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsFindFirstOrThrowArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikedAlbumsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LikedAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findMany()
     * 
     * // Get first 10 LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedAlbumsWithIdOnly = await prisma.likedAlbums.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikedAlbumsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LikedAlbums.
     * @param {LikedAlbumsCreateArgs} args - Arguments to create a LikedAlbums.
     * @example
     * // Create one LikedAlbums
     * const LikedAlbums = await prisma.likedAlbums.create({
     *   data: {
     *     // ... data to create a LikedAlbums
     *   }
     * })
     * 
    **/
    create<T extends LikedAlbumsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsCreateArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LikedAlbums.
     *     @param {LikedAlbumsCreateManyArgs} args - Arguments to create many LikedAlbums.
     *     @example
     *     // Create many LikedAlbums
     *     const likedAlbums = await prisma.likedAlbums.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikedAlbumsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikedAlbums.
     * @param {LikedAlbumsDeleteArgs} args - Arguments to delete one LikedAlbums.
     * @example
     * // Delete one LikedAlbums
     * const LikedAlbums = await prisma.likedAlbums.delete({
     *   where: {
     *     // ... filter to delete one LikedAlbums
     *   }
     * })
     * 
    **/
    delete<T extends LikedAlbumsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsDeleteArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LikedAlbums.
     * @param {LikedAlbumsUpdateArgs} args - Arguments to update one LikedAlbums.
     * @example
     * // Update one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikedAlbumsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsUpdateArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LikedAlbums.
     * @param {LikedAlbumsDeleteManyArgs} args - Arguments to filter LikedAlbums to delete.
     * @example
     * // Delete a few LikedAlbums
     * const { count } = await prisma.likedAlbums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikedAlbumsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikedAlbumsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedAlbums.
     * @param {LikedAlbumsUpsertArgs} args - Arguments to update or create a LikedAlbums.
     * @example
     * // Update or create a LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.upsert({
     *   create: {
     *     // ... data to create a LikedAlbums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedAlbums we want to update
     *   }
     * })
    **/
    upsert<T extends LikedAlbumsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsUpsertArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsCountArgs} args - Arguments to filter LikedAlbums to count.
     * @example
     * // Count the number of LikedAlbums
     * const count = await prisma.likedAlbums.count({
     *   where: {
     *     // ... the filter for the LikedAlbums we want to count
     *   }
     * })
    **/
    count<T extends LikedAlbumsCountArgs>(
      args?: Subset<T, LikedAlbumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedAlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedAlbumsAggregateArgs>(args: Subset<T, LikedAlbumsAggregateArgs>): Prisma.PrismaPromise<GetLikedAlbumsAggregateType<T>>

    /**
     * Group by LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedAlbumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedAlbumsGroupByArgs['orderBy'] }
        : { orderBy?: LikedAlbumsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedAlbumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedAlbumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedAlbums model
   */
  readonly fields: LikedAlbumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedAlbums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedAlbumsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LikedAlbums model
   */ 
  interface LikedAlbumsFieldRefs {
    readonly id: FieldRef<"LikedAlbums", 'Int'>
    readonly AlbumId: FieldRef<"LikedAlbums", 'Int'>
    readonly UserId: FieldRef<"LikedAlbums", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * LikedAlbums findUnique
   */
  export type LikedAlbumsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where: LikedAlbumsWhereUniqueInput
  }


  /**
   * LikedAlbums findUniqueOrThrow
   */
  export type LikedAlbumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where: LikedAlbumsWhereUniqueInput
  }


  /**
   * LikedAlbums findFirst
   */
  export type LikedAlbumsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedAlbums.
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedAlbums.
     */
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }


  /**
   * LikedAlbums findFirstOrThrow
   */
  export type LikedAlbumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedAlbums.
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedAlbums.
     */
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }


  /**
   * LikedAlbums findMany
   */
  export type LikedAlbumsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedAlbums.
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }


  /**
   * LikedAlbums create
   */
  export type LikedAlbumsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * The data needed to create a LikedAlbums.
     */
    data: XOR<LikedAlbumsCreateInput, LikedAlbumsUncheckedCreateInput>
  }


  /**
   * LikedAlbums createMany
   */
  export type LikedAlbumsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedAlbums.
     */
    data: LikedAlbumsCreateManyInput | LikedAlbumsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LikedAlbums update
   */
  export type LikedAlbumsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * The data needed to update a LikedAlbums.
     */
    data: XOR<LikedAlbumsUpdateInput, LikedAlbumsUncheckedUpdateInput>
    /**
     * Choose, which LikedAlbums to update.
     */
    where: LikedAlbumsWhereUniqueInput
  }


  /**
   * LikedAlbums updateMany
   */
  export type LikedAlbumsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedAlbums.
     */
    data: XOR<LikedAlbumsUpdateManyMutationInput, LikedAlbumsUncheckedUpdateManyInput>
    /**
     * Filter which LikedAlbums to update
     */
    where?: LikedAlbumsWhereInput
  }


  /**
   * LikedAlbums upsert
   */
  export type LikedAlbumsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * The filter to search for the LikedAlbums to update in case it exists.
     */
    where: LikedAlbumsWhereUniqueInput
    /**
     * In case the LikedAlbums found by the `where` argument doesn't exist, create a new LikedAlbums with this data.
     */
    create: XOR<LikedAlbumsCreateInput, LikedAlbumsUncheckedCreateInput>
    /**
     * In case the LikedAlbums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedAlbumsUpdateInput, LikedAlbumsUncheckedUpdateInput>
  }


  /**
   * LikedAlbums delete
   */
  export type LikedAlbumsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Filter which LikedAlbums to delete.
     */
    where: LikedAlbumsWhereUniqueInput
  }


  /**
   * LikedAlbums deleteMany
   */
  export type LikedAlbumsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedAlbums to delete
     */
    where?: LikedAlbumsWhereInput
  }


  /**
   * LikedAlbums without action
   */
  export type LikedAlbumsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
  }



  /**
   * Model Followers
   */

  export type AggregateFollowers = {
    _count: FollowersCountAggregateOutputType | null
    _avg: FollowersAvgAggregateOutputType | null
    _sum: FollowersSumAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  export type FollowersAvgAggregateOutputType = {
    id: number | null
    followerId: number | null
    followedUserId: number | null
  }

  export type FollowersSumAggregateOutputType = {
    id: number | null
    followerId: number | null
    followedUserId: number | null
  }

  export type FollowersMinAggregateOutputType = {
    id: number | null
    followerId: number | null
    followedUserId: number | null
  }

  export type FollowersMaxAggregateOutputType = {
    id: number | null
    followerId: number | null
    followedUserId: number | null
  }

  export type FollowersCountAggregateOutputType = {
    id: number
    followerId: number
    followedUserId: number
    _all: number
  }


  export type FollowersAvgAggregateInputType = {
    id?: true
    followerId?: true
    followedUserId?: true
  }

  export type FollowersSumAggregateInputType = {
    id?: true
    followerId?: true
    followedUserId?: true
  }

  export type FollowersMinAggregateInputType = {
    id?: true
    followerId?: true
    followedUserId?: true
  }

  export type FollowersMaxAggregateInputType = {
    id?: true
    followerId?: true
    followedUserId?: true
  }

  export type FollowersCountAggregateInputType = {
    id?: true
    followerId?: true
    followedUserId?: true
    _all?: true
  }

  export type FollowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followers to aggregate.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followers
    **/
    _count?: true | FollowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowersMaxAggregateInputType
  }

  export type GetFollowersAggregateType<T extends FollowersAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowers[P]>
      : GetScalarType<T[P], AggregateFollowers[P]>
  }




  export type FollowersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowersWhereInput
    orderBy?: FollowersOrderByWithAggregationInput | FollowersOrderByWithAggregationInput[]
    by: FollowersScalarFieldEnum[] | FollowersScalarFieldEnum
    having?: FollowersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowersCountAggregateInputType | true
    _avg?: FollowersAvgAggregateInputType
    _sum?: FollowersSumAggregateInputType
    _min?: FollowersMinAggregateInputType
    _max?: FollowersMaxAggregateInputType
  }

  export type FollowersGroupByOutputType = {
    id: number
    followerId: number
    followedUserId: number
    _count: FollowersCountAggregateOutputType | null
    _avg: FollowersAvgAggregateOutputType | null
    _sum: FollowersSumAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  type GetFollowersGroupByPayload<T extends FollowersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowersGroupByOutputType[P]>
            : GetScalarType<T[P], FollowersGroupByOutputType[P]>
        }
      >
    >


  export type FollowersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followedUserId?: boolean
  }, ExtArgs["result"]["followers"]>

  export type FollowersSelectScalar = {
    id?: boolean
    followerId?: boolean
    followedUserId?: boolean
  }


  export type $FollowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Followers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      followerId: number
      followedUserId: number
    }, ExtArgs["result"]["followers"]>
    composites: {}
  }


  type FollowersGetPayload<S extends boolean | null | undefined | FollowersDefaultArgs> = $Result.GetResult<Prisma.$FollowersPayload, S>

  type FollowersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowersCountAggregateInputType | true
    }

  export interface FollowersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Followers'], meta: { name: 'Followers' } }
    /**
     * Find zero or one Followers that matches the filter.
     * @param {FollowersFindUniqueArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Followers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowersFindUniqueOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersFindFirstArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersFindFirstArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Followers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersFindFirstOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followers
     * const followers = await prisma.followers.findMany()
     * 
     * // Get first 10 Followers
     * const followers = await prisma.followers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followersWithIdOnly = await prisma.followers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FollowersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Followers.
     * @param {FollowersCreateArgs} args - Arguments to create a Followers.
     * @example
     * // Create one Followers
     * const Followers = await prisma.followers.create({
     *   data: {
     *     // ... data to create a Followers
     *   }
     * })
     * 
    **/
    create<T extends FollowersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersCreateArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Followers.
     *     @param {FollowersCreateManyArgs} args - Arguments to create many Followers.
     *     @example
     *     // Create many Followers
     *     const followers = await prisma.followers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Followers.
     * @param {FollowersDeleteArgs} args - Arguments to delete one Followers.
     * @example
     * // Delete one Followers
     * const Followers = await prisma.followers.delete({
     *   where: {
     *     // ... filter to delete one Followers
     *   }
     * })
     * 
    **/
    delete<T extends FollowersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersDeleteArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Followers.
     * @param {FollowersUpdateArgs} args - Arguments to update one Followers.
     * @example
     * // Update one Followers
     * const followers = await prisma.followers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersUpdateArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Followers.
     * @param {FollowersDeleteManyArgs} args - Arguments to filter Followers to delete.
     * @example
     * // Delete a few Followers
     * const { count } = await prisma.followers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followers
     * const followers = await prisma.followers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Followers.
     * @param {FollowersUpsertArgs} args - Arguments to update or create a Followers.
     * @example
     * // Update or create a Followers
     * const followers = await prisma.followers.upsert({
     *   create: {
     *     // ... data to create a Followers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Followers we want to update
     *   }
     * })
    **/
    upsert<T extends FollowersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersUpsertArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersCountArgs} args - Arguments to filter Followers to count.
     * @example
     * // Count the number of Followers
     * const count = await prisma.followers.count({
     *   where: {
     *     // ... the filter for the Followers we want to count
     *   }
     * })
    **/
    count<T extends FollowersCountArgs>(
      args?: Subset<T, FollowersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowersAggregateArgs>(args: Subset<T, FollowersAggregateArgs>): Prisma.PrismaPromise<GetFollowersAggregateType<T>>

    /**
     * Group by Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowersGroupByArgs['orderBy'] }
        : { orderBy?: FollowersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Followers model
   */
  readonly fields: FollowersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Followers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Followers model
   */ 
  interface FollowersFieldRefs {
    readonly id: FieldRef<"Followers", 'Int'>
    readonly followerId: FieldRef<"Followers", 'Int'>
    readonly followedUserId: FieldRef<"Followers", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Followers findUnique
   */
  export type FollowersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where: FollowersWhereUniqueInput
  }


  /**
   * Followers findUniqueOrThrow
   */
  export type FollowersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where: FollowersWhereUniqueInput
  }


  /**
   * Followers findFirst
   */
  export type FollowersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * Followers findFirstOrThrow
   */
  export type FollowersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * Followers findMany
   */
  export type FollowersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followers.
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * Followers create
   */
  export type FollowersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * The data needed to create a Followers.
     */
    data: XOR<FollowersCreateInput, FollowersUncheckedCreateInput>
  }


  /**
   * Followers createMany
   */
  export type FollowersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Followers.
     */
    data: FollowersCreateManyInput | FollowersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Followers update
   */
  export type FollowersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * The data needed to update a Followers.
     */
    data: XOR<FollowersUpdateInput, FollowersUncheckedUpdateInput>
    /**
     * Choose, which Followers to update.
     */
    where: FollowersWhereUniqueInput
  }


  /**
   * Followers updateMany
   */
  export type FollowersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Followers.
     */
    data: XOR<FollowersUpdateManyMutationInput, FollowersUncheckedUpdateManyInput>
    /**
     * Filter which Followers to update
     */
    where?: FollowersWhereInput
  }


  /**
   * Followers upsert
   */
  export type FollowersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * The filter to search for the Followers to update in case it exists.
     */
    where: FollowersWhereUniqueInput
    /**
     * In case the Followers found by the `where` argument doesn't exist, create a new Followers with this data.
     */
    create: XOR<FollowersCreateInput, FollowersUncheckedCreateInput>
    /**
     * In case the Followers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowersUpdateInput, FollowersUncheckedUpdateInput>
  }


  /**
   * Followers delete
   */
  export type FollowersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Filter which Followers to delete.
     */
    where: FollowersWhereUniqueInput
  }


  /**
   * Followers deleteMany
   */
  export type FollowersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followers to delete
     */
    where?: FollowersWhereInput
  }


  /**
   * Followers without action
   */
  export type FollowersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TrackScalarFieldEnum: {
    id: 'id',
    name: 'name',
    artist: 'artist',
    url: 'url',
    albumId: 'albumId',
    thumbnail: 'thumbnail',
    genreId: 'genreId'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    city: 'city',
    gender: 'gender',
    profilePicture: 'profilePicture',
    country: 'country',
    dateOfBirth: 'dateOfBirth'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    description: 'description',
    primaryColor: 'primaryColor'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const ArtistsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    genreId: 'genreId',
    popularity: 'popularity',
    photoUrl: 'photoUrl',
    albumId: 'albumId'
  };

  export type ArtistsScalarFieldEnum = (typeof ArtistsScalarFieldEnum)[keyof typeof ArtistsScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const AlbumArtistScalarFieldEnum: {
    id: 'id',
    artistsId: 'artistsId',
    albumId: 'albumId'
  };

  export type AlbumArtistScalarFieldEnum = (typeof AlbumArtistScalarFieldEnum)[keyof typeof AlbumArtistScalarFieldEnum]


  export const PlaylistTracksScalarFieldEnum: {
    id: 'id',
    trackId: 'trackId',
    playlistId: 'playlistId'
  };

  export type PlaylistTracksScalarFieldEnum = (typeof PlaylistTracksScalarFieldEnum)[keyof typeof PlaylistTracksScalarFieldEnum]


  export const LikedTracksScalarFieldEnum: {
    id: 'id',
    trackId: 'trackId',
    UserId: 'UserId'
  };

  export type LikedTracksScalarFieldEnum = (typeof LikedTracksScalarFieldEnum)[keyof typeof LikedTracksScalarFieldEnum]


  export const FollowPlaylistScalarFieldEnum: {
    id: 'id',
    PlaylistId: 'PlaylistId',
    UserId: 'UserId'
  };

  export type FollowPlaylistScalarFieldEnum = (typeof FollowPlaylistScalarFieldEnum)[keyof typeof FollowPlaylistScalarFieldEnum]


  export const LikedAlbumsScalarFieldEnum: {
    id: 'id',
    AlbumId: 'AlbumId',
    UserId: 'UserId'
  };

  export type LikedAlbumsScalarFieldEnum = (typeof LikedAlbumsScalarFieldEnum)[keyof typeof LikedAlbumsScalarFieldEnum]


  export const FollowersScalarFieldEnum: {
    id: 'id',
    followerId: 'followerId',
    followedUserId: 'followedUserId'
  };

  export type FollowersScalarFieldEnum = (typeof FollowersScalarFieldEnum)[keyof typeof FollowersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    id?: IntFilter<"Track"> | number
    name?: StringFilter<"Track"> | string
    artist?: StringFilter<"Track"> | string
    url?: StringFilter<"Track"> | string
    albumId?: StringFilter<"Track"> | string
    thumbnail?: StringFilter<"Track"> | string
    genreId?: StringFilter<"Track"> | string
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    url?: SortOrder
    albumId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    name?: StringFilter<"Track"> | string
    artist?: StringFilter<"Track"> | string
    url?: StringFilter<"Track"> | string
    albumId?: StringFilter<"Track"> | string
    thumbnail?: StringFilter<"Track"> | string
    genreId?: StringFilter<"Track"> | string
  }, "id">

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    url?: SortOrder
    albumId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Track"> | number
    name?: StringWithAggregatesFilter<"Track"> | string
    artist?: StringWithAggregatesFilter<"Track"> | string
    url?: StringWithAggregatesFilter<"Track"> | string
    albumId?: StringWithAggregatesFilter<"Track"> | string
    thumbnail?: StringWithAggregatesFilter<"Track"> | string
    genreId?: StringWithAggregatesFilter<"Track"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    country?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    city?: SortOrder
    gender?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    country?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    profilePicture?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "email" | "profilePicture">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    city?: SortOrder
    gender?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    country?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    city?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringWithAggregatesFilter<"User"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: IntFilter<"Playlist"> | number
    name?: StringFilter<"Playlist"> | string
    imageUrl?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    primaryColor?: StringFilter<"Playlist"> | string
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    primaryColor?: SortOrder
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    name?: StringFilter<"Playlist"> | string
    imageUrl?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    primaryColor?: StringFilter<"Playlist"> | string
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    primaryColor?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Playlist"> | number
    name?: StringWithAggregatesFilter<"Playlist"> | string
    imageUrl?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringWithAggregatesFilter<"Playlist"> | string
    primaryColor?: StringWithAggregatesFilter<"Playlist"> | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    name?: StringFilter<"Genre"> | string
  }, "id">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type ArtistsWhereInput = {
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    id?: IntFilter<"Artists"> | number
    name?: StringFilter<"Artists"> | string
    genreId?: StringFilter<"Artists"> | string
    popularity?: FloatFilter<"Artists"> | number
    photoUrl?: StringFilter<"Artists"> | string
    albumId?: StringFilter<"Artists"> | string
  }

  export type ArtistsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    genreId?: SortOrder
    popularity?: SortOrder
    photoUrl?: SortOrder
    albumId?: SortOrder
  }

  export type ArtistsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    name?: StringFilter<"Artists"> | string
    genreId?: StringFilter<"Artists"> | string
    popularity?: FloatFilter<"Artists"> | number
    photoUrl?: StringFilter<"Artists"> | string
    albumId?: StringFilter<"Artists"> | string
  }, "id">

  export type ArtistsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    genreId?: SortOrder
    popularity?: SortOrder
    photoUrl?: SortOrder
    albumId?: SortOrder
    _count?: ArtistsCountOrderByAggregateInput
    _avg?: ArtistsAvgOrderByAggregateInput
    _max?: ArtistsMaxOrderByAggregateInput
    _min?: ArtistsMinOrderByAggregateInput
    _sum?: ArtistsSumOrderByAggregateInput
  }

  export type ArtistsScalarWhereWithAggregatesInput = {
    AND?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    OR?: ArtistsScalarWhereWithAggregatesInput[]
    NOT?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artists"> | number
    name?: StringWithAggregatesFilter<"Artists"> | string
    genreId?: StringWithAggregatesFilter<"Artists"> | string
    popularity?: FloatWithAggregatesFilter<"Artists"> | number
    photoUrl?: StringWithAggregatesFilter<"Artists"> | string
    albumId?: StringWithAggregatesFilter<"Artists"> | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: IntFilter<"Album"> | number
    name?: StringFilter<"Album"> | string
    imageUrl?: StringFilter<"Album"> | string
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    name?: StringFilter<"Album"> | string
    imageUrl?: StringFilter<"Album"> | string
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Album"> | number
    name?: StringWithAggregatesFilter<"Album"> | string
    imageUrl?: StringWithAggregatesFilter<"Album"> | string
  }

  export type AlbumArtistWhereInput = {
    AND?: AlbumArtistWhereInput | AlbumArtistWhereInput[]
    OR?: AlbumArtistWhereInput[]
    NOT?: AlbumArtistWhereInput | AlbumArtistWhereInput[]
    id?: IntFilter<"AlbumArtist"> | number
    artistsId?: IntFilter<"AlbumArtist"> | number
    albumId?: IntFilter<"AlbumArtist"> | number
  }

  export type AlbumArtistOrderByWithRelationInput = {
    id?: SortOrder
    artistsId?: SortOrder
    albumId?: SortOrder
  }

  export type AlbumArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumArtistWhereInput | AlbumArtistWhereInput[]
    OR?: AlbumArtistWhereInput[]
    NOT?: AlbumArtistWhereInput | AlbumArtistWhereInput[]
    artistsId?: IntFilter<"AlbumArtist"> | number
    albumId?: IntFilter<"AlbumArtist"> | number
  }, "id">

  export type AlbumArtistOrderByWithAggregationInput = {
    id?: SortOrder
    artistsId?: SortOrder
    albumId?: SortOrder
    _count?: AlbumArtistCountOrderByAggregateInput
    _avg?: AlbumArtistAvgOrderByAggregateInput
    _max?: AlbumArtistMaxOrderByAggregateInput
    _min?: AlbumArtistMinOrderByAggregateInput
    _sum?: AlbumArtistSumOrderByAggregateInput
  }

  export type AlbumArtistScalarWhereWithAggregatesInput = {
    AND?: AlbumArtistScalarWhereWithAggregatesInput | AlbumArtistScalarWhereWithAggregatesInput[]
    OR?: AlbumArtistScalarWhereWithAggregatesInput[]
    NOT?: AlbumArtistScalarWhereWithAggregatesInput | AlbumArtistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlbumArtist"> | number
    artistsId?: IntWithAggregatesFilter<"AlbumArtist"> | number
    albumId?: IntWithAggregatesFilter<"AlbumArtist"> | number
  }

  export type PlaylistTracksWhereInput = {
    AND?: PlaylistTracksWhereInput | PlaylistTracksWhereInput[]
    OR?: PlaylistTracksWhereInput[]
    NOT?: PlaylistTracksWhereInput | PlaylistTracksWhereInput[]
    id?: IntFilter<"PlaylistTracks"> | number
    trackId?: IntFilter<"PlaylistTracks"> | number
    playlistId?: IntFilter<"PlaylistTracks"> | number
  }

  export type PlaylistTracksOrderByWithRelationInput = {
    id?: SortOrder
    trackId?: SortOrder
    playlistId?: SortOrder
  }

  export type PlaylistTracksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaylistTracksWhereInput | PlaylistTracksWhereInput[]
    OR?: PlaylistTracksWhereInput[]
    NOT?: PlaylistTracksWhereInput | PlaylistTracksWhereInput[]
    trackId?: IntFilter<"PlaylistTracks"> | number
    playlistId?: IntFilter<"PlaylistTracks"> | number
  }, "id">

  export type PlaylistTracksOrderByWithAggregationInput = {
    id?: SortOrder
    trackId?: SortOrder
    playlistId?: SortOrder
    _count?: PlaylistTracksCountOrderByAggregateInput
    _avg?: PlaylistTracksAvgOrderByAggregateInput
    _max?: PlaylistTracksMaxOrderByAggregateInput
    _min?: PlaylistTracksMinOrderByAggregateInput
    _sum?: PlaylistTracksSumOrderByAggregateInput
  }

  export type PlaylistTracksScalarWhereWithAggregatesInput = {
    AND?: PlaylistTracksScalarWhereWithAggregatesInput | PlaylistTracksScalarWhereWithAggregatesInput[]
    OR?: PlaylistTracksScalarWhereWithAggregatesInput[]
    NOT?: PlaylistTracksScalarWhereWithAggregatesInput | PlaylistTracksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlaylistTracks"> | number
    trackId?: IntWithAggregatesFilter<"PlaylistTracks"> | number
    playlistId?: IntWithAggregatesFilter<"PlaylistTracks"> | number
  }

  export type LikedTracksWhereInput = {
    AND?: LikedTracksWhereInput | LikedTracksWhereInput[]
    OR?: LikedTracksWhereInput[]
    NOT?: LikedTracksWhereInput | LikedTracksWhereInput[]
    id?: IntFilter<"LikedTracks"> | number
    trackId?: IntFilter<"LikedTracks"> | number
    UserId?: IntFilter<"LikedTracks"> | number
  }

  export type LikedTracksOrderByWithRelationInput = {
    id?: SortOrder
    trackId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedTracksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikedTracksWhereInput | LikedTracksWhereInput[]
    OR?: LikedTracksWhereInput[]
    NOT?: LikedTracksWhereInput | LikedTracksWhereInput[]
    trackId?: IntFilter<"LikedTracks"> | number
    UserId?: IntFilter<"LikedTracks"> | number
  }, "id">

  export type LikedTracksOrderByWithAggregationInput = {
    id?: SortOrder
    trackId?: SortOrder
    UserId?: SortOrder
    _count?: LikedTracksCountOrderByAggregateInput
    _avg?: LikedTracksAvgOrderByAggregateInput
    _max?: LikedTracksMaxOrderByAggregateInput
    _min?: LikedTracksMinOrderByAggregateInput
    _sum?: LikedTracksSumOrderByAggregateInput
  }

  export type LikedTracksScalarWhereWithAggregatesInput = {
    AND?: LikedTracksScalarWhereWithAggregatesInput | LikedTracksScalarWhereWithAggregatesInput[]
    OR?: LikedTracksScalarWhereWithAggregatesInput[]
    NOT?: LikedTracksScalarWhereWithAggregatesInput | LikedTracksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LikedTracks"> | number
    trackId?: IntWithAggregatesFilter<"LikedTracks"> | number
    UserId?: IntWithAggregatesFilter<"LikedTracks"> | number
  }

  export type FollowPlaylistWhereInput = {
    AND?: FollowPlaylistWhereInput | FollowPlaylistWhereInput[]
    OR?: FollowPlaylistWhereInput[]
    NOT?: FollowPlaylistWhereInput | FollowPlaylistWhereInput[]
    id?: IntFilter<"FollowPlaylist"> | number
    PlaylistId?: IntFilter<"FollowPlaylist"> | number
    UserId?: IntFilter<"FollowPlaylist"> | number
  }

  export type FollowPlaylistOrderByWithRelationInput = {
    id?: SortOrder
    PlaylistId?: SortOrder
    UserId?: SortOrder
  }

  export type FollowPlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FollowPlaylistWhereInput | FollowPlaylistWhereInput[]
    OR?: FollowPlaylistWhereInput[]
    NOT?: FollowPlaylistWhereInput | FollowPlaylistWhereInput[]
    PlaylistId?: IntFilter<"FollowPlaylist"> | number
    UserId?: IntFilter<"FollowPlaylist"> | number
  }, "id">

  export type FollowPlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    PlaylistId?: SortOrder
    UserId?: SortOrder
    _count?: FollowPlaylistCountOrderByAggregateInput
    _avg?: FollowPlaylistAvgOrderByAggregateInput
    _max?: FollowPlaylistMaxOrderByAggregateInput
    _min?: FollowPlaylistMinOrderByAggregateInput
    _sum?: FollowPlaylistSumOrderByAggregateInput
  }

  export type FollowPlaylistScalarWhereWithAggregatesInput = {
    AND?: FollowPlaylistScalarWhereWithAggregatesInput | FollowPlaylistScalarWhereWithAggregatesInput[]
    OR?: FollowPlaylistScalarWhereWithAggregatesInput[]
    NOT?: FollowPlaylistScalarWhereWithAggregatesInput | FollowPlaylistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FollowPlaylist"> | number
    PlaylistId?: IntWithAggregatesFilter<"FollowPlaylist"> | number
    UserId?: IntWithAggregatesFilter<"FollowPlaylist"> | number
  }

  export type LikedAlbumsWhereInput = {
    AND?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    OR?: LikedAlbumsWhereInput[]
    NOT?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    id?: IntFilter<"LikedAlbums"> | number
    AlbumId?: IntFilter<"LikedAlbums"> | number
    UserId?: IntFilter<"LikedAlbums"> | number
  }

  export type LikedAlbumsOrderByWithRelationInput = {
    id?: SortOrder
    AlbumId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedAlbumsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    OR?: LikedAlbumsWhereInput[]
    NOT?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    AlbumId?: IntFilter<"LikedAlbums"> | number
    UserId?: IntFilter<"LikedAlbums"> | number
  }, "id">

  export type LikedAlbumsOrderByWithAggregationInput = {
    id?: SortOrder
    AlbumId?: SortOrder
    UserId?: SortOrder
    _count?: LikedAlbumsCountOrderByAggregateInput
    _avg?: LikedAlbumsAvgOrderByAggregateInput
    _max?: LikedAlbumsMaxOrderByAggregateInput
    _min?: LikedAlbumsMinOrderByAggregateInput
    _sum?: LikedAlbumsSumOrderByAggregateInput
  }

  export type LikedAlbumsScalarWhereWithAggregatesInput = {
    AND?: LikedAlbumsScalarWhereWithAggregatesInput | LikedAlbumsScalarWhereWithAggregatesInput[]
    OR?: LikedAlbumsScalarWhereWithAggregatesInput[]
    NOT?: LikedAlbumsScalarWhereWithAggregatesInput | LikedAlbumsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LikedAlbums"> | number
    AlbumId?: IntWithAggregatesFilter<"LikedAlbums"> | number
    UserId?: IntWithAggregatesFilter<"LikedAlbums"> | number
  }

  export type FollowersWhereInput = {
    AND?: FollowersWhereInput | FollowersWhereInput[]
    OR?: FollowersWhereInput[]
    NOT?: FollowersWhereInput | FollowersWhereInput[]
    id?: IntFilter<"Followers"> | number
    followerId?: IntFilter<"Followers"> | number
    followedUserId?: IntFilter<"Followers"> | number
  }

  export type FollowersOrderByWithRelationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followedUserId?: SortOrder
  }

  export type FollowersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FollowersWhereInput | FollowersWhereInput[]
    OR?: FollowersWhereInput[]
    NOT?: FollowersWhereInput | FollowersWhereInput[]
    followerId?: IntFilter<"Followers"> | number
    followedUserId?: IntFilter<"Followers"> | number
  }, "id">

  export type FollowersOrderByWithAggregationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followedUserId?: SortOrder
    _count?: FollowersCountOrderByAggregateInput
    _avg?: FollowersAvgOrderByAggregateInput
    _max?: FollowersMaxOrderByAggregateInput
    _min?: FollowersMinOrderByAggregateInput
    _sum?: FollowersSumOrderByAggregateInput
  }

  export type FollowersScalarWhereWithAggregatesInput = {
    AND?: FollowersScalarWhereWithAggregatesInput | FollowersScalarWhereWithAggregatesInput[]
    OR?: FollowersScalarWhereWithAggregatesInput[]
    NOT?: FollowersScalarWhereWithAggregatesInput | FollowersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Followers"> | number
    followerId?: IntWithAggregatesFilter<"Followers"> | number
    followedUserId?: IntWithAggregatesFilter<"Followers"> | number
  }

  export type TrackCreateInput = {
    name: string
    artist: string
    url: string
    albumId: string
    thumbnail: string
    genreId: string
  }

  export type TrackUncheckedCreateInput = {
    id?: number
    name: string
    artist: string
    url: string
    albumId: string
    thumbnail: string
    genreId: string
  }

  export type TrackUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackCreateManyInput = {
    id?: number
    name: string
    artist: string
    url: string
    albumId: string
    thumbnail: string
    genreId: string
  }

  export type TrackUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    city: string
    gender: string
    profilePicture?: string | null
    country: string
    dateOfBirth?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    city: string
    gender: string
    profilePicture?: string | null
    country: string
    dateOfBirth?: Date | string | null
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    city: string
    gender: string
    profilePicture?: string | null
    country: string
    dateOfBirth?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlaylistCreateInput = {
    name: string
    imageUrl: string
    description: string
    primaryColor: string
  }

  export type PlaylistUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl: string
    description: string
    primaryColor: string
  }

  export type PlaylistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistCreateManyInput = {
    id?: number
    name: string
    imageUrl: string
    description: string
    primaryColor: string
  }

  export type PlaylistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type GenreCreateInput = {
    name: string
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsCreateInput = {
    name: string
    genreId: string
    popularity: number
    photoUrl: string
    albumId: string
  }

  export type ArtistsUncheckedCreateInput = {
    id?: number
    name: string
    genreId: string
    popularity: number
    photoUrl: string
    albumId: string
  }

  export type ArtistsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsCreateManyInput = {
    id?: number
    name: string
    genreId: string
    popularity: number
    photoUrl: string
    albumId: string
  }

  export type ArtistsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    popularity?: FloatFieldUpdateOperationsInput | number
    photoUrl?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumCreateInput = {
    name: string
    imageUrl: string
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl: string
  }

  export type AlbumUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumCreateManyInput = {
    id?: number
    name: string
    imageUrl: string
  }

  export type AlbumUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumArtistCreateInput = {
    artistsId: number
    albumId: number
  }

  export type AlbumArtistUncheckedCreateInput = {
    id?: number
    artistsId: number
    albumId: number
  }

  export type AlbumArtistUpdateInput = {
    artistsId?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistsId?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumArtistCreateManyInput = {
    id?: number
    artistsId: number
    albumId: number
  }

  export type AlbumArtistUpdateManyMutationInput = {
    artistsId?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistsId?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTracksCreateInput = {
    trackId: number
    playlistId: number
  }

  export type PlaylistTracksUncheckedCreateInput = {
    id?: number
    trackId: number
    playlistId: number
  }

  export type PlaylistTracksUpdateInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTracksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTracksCreateManyInput = {
    id?: number
    trackId: number
    playlistId: number
  }

  export type PlaylistTracksUpdateManyMutationInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTracksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
  }

  export type LikedTracksCreateInput = {
    trackId: number
    UserId: number
  }

  export type LikedTracksUncheckedCreateInput = {
    id?: number
    trackId: number
    UserId: number
  }

  export type LikedTracksUpdateInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type LikedTracksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type LikedTracksCreateManyInput = {
    id?: number
    trackId: number
    UserId: number
  }

  export type LikedTracksUpdateManyMutationInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type LikedTracksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowPlaylistCreateInput = {
    PlaylistId: number
    UserId: number
  }

  export type FollowPlaylistUncheckedCreateInput = {
    id?: number
    PlaylistId: number
    UserId: number
  }

  export type FollowPlaylistUpdateInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowPlaylistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    PlaylistId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowPlaylistCreateManyInput = {
    id?: number
    PlaylistId: number
    UserId: number
  }

  export type FollowPlaylistUpdateManyMutationInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowPlaylistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    PlaylistId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type LikedAlbumsCreateInput = {
    AlbumId: number
    UserId: number
  }

  export type LikedAlbumsUncheckedCreateInput = {
    id?: number
    AlbumId: number
    UserId: number
  }

  export type LikedAlbumsUpdateInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type LikedAlbumsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    AlbumId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type LikedAlbumsCreateManyInput = {
    id?: number
    AlbumId: number
    UserId: number
  }

  export type LikedAlbumsUpdateManyMutationInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type LikedAlbumsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    AlbumId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowersCreateInput = {
    followerId: number
    followedUserId: number
  }

  export type FollowersUncheckedCreateInput = {
    id?: number
    followerId: number
    followedUserId: number
  }

  export type FollowersUpdateInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    followedUserId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    followedUserId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowersCreateManyInput = {
    id?: number
    followerId: number
    followedUserId: number
  }

  export type FollowersUpdateManyMutationInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    followedUserId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    followedUserId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    url?: SortOrder
    albumId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    url?: SortOrder
    albumId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    url?: SortOrder
    albumId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    city?: SortOrder
    gender?: SortOrder
    profilePicture?: SortOrder
    country?: SortOrder
    dateOfBirth?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    city?: SortOrder
    gender?: SortOrder
    profilePicture?: SortOrder
    country?: SortOrder
    dateOfBirth?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    city?: SortOrder
    gender?: SortOrder
    profilePicture?: SortOrder
    country?: SortOrder
    dateOfBirth?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    primaryColor?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    primaryColor?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    primaryColor?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ArtistsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genreId?: SortOrder
    popularity?: SortOrder
    photoUrl?: SortOrder
    albumId?: SortOrder
  }

  export type ArtistsAvgOrderByAggregateInput = {
    id?: SortOrder
    popularity?: SortOrder
  }

  export type ArtistsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genreId?: SortOrder
    popularity?: SortOrder
    photoUrl?: SortOrder
    albumId?: SortOrder
  }

  export type ArtistsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genreId?: SortOrder
    popularity?: SortOrder
    photoUrl?: SortOrder
    albumId?: SortOrder
  }

  export type ArtistsSumOrderByAggregateInput = {
    id?: SortOrder
    popularity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlbumArtistCountOrderByAggregateInput = {
    id?: SortOrder
    artistsId?: SortOrder
    albumId?: SortOrder
  }

  export type AlbumArtistAvgOrderByAggregateInput = {
    id?: SortOrder
    artistsId?: SortOrder
    albumId?: SortOrder
  }

  export type AlbumArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    artistsId?: SortOrder
    albumId?: SortOrder
  }

  export type AlbumArtistMinOrderByAggregateInput = {
    id?: SortOrder
    artistsId?: SortOrder
    albumId?: SortOrder
  }

  export type AlbumArtistSumOrderByAggregateInput = {
    id?: SortOrder
    artistsId?: SortOrder
    albumId?: SortOrder
  }

  export type PlaylistTracksCountOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    playlistId?: SortOrder
  }

  export type PlaylistTracksAvgOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    playlistId?: SortOrder
  }

  export type PlaylistTracksMaxOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    playlistId?: SortOrder
  }

  export type PlaylistTracksMinOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    playlistId?: SortOrder
  }

  export type PlaylistTracksSumOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    playlistId?: SortOrder
  }

  export type LikedTracksCountOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedTracksAvgOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedTracksMaxOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedTracksMinOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedTracksSumOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    UserId?: SortOrder
  }

  export type FollowPlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    PlaylistId?: SortOrder
    UserId?: SortOrder
  }

  export type FollowPlaylistAvgOrderByAggregateInput = {
    id?: SortOrder
    PlaylistId?: SortOrder
    UserId?: SortOrder
  }

  export type FollowPlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    PlaylistId?: SortOrder
    UserId?: SortOrder
  }

  export type FollowPlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    PlaylistId?: SortOrder
    UserId?: SortOrder
  }

  export type FollowPlaylistSumOrderByAggregateInput = {
    id?: SortOrder
    PlaylistId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedAlbumsCountOrderByAggregateInput = {
    id?: SortOrder
    AlbumId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedAlbumsAvgOrderByAggregateInput = {
    id?: SortOrder
    AlbumId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedAlbumsMaxOrderByAggregateInput = {
    id?: SortOrder
    AlbumId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedAlbumsMinOrderByAggregateInput = {
    id?: SortOrder
    AlbumId?: SortOrder
    UserId?: SortOrder
  }

  export type LikedAlbumsSumOrderByAggregateInput = {
    id?: SortOrder
    AlbumId?: SortOrder
    UserId?: SortOrder
  }

  export type FollowersCountOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followedUserId?: SortOrder
  }

  export type FollowersAvgOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followedUserId?: SortOrder
  }

  export type FollowersMaxOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followedUserId?: SortOrder
  }

  export type FollowersMinOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followedUserId?: SortOrder
  }

  export type FollowersSumOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followedUserId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TrackDefaultArgs instead
     */
    export type TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistDefaultArgs instead
     */
    export type PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreDefaultArgs instead
     */
    export type GenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistsDefaultArgs instead
     */
    export type ArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumDefaultArgs instead
     */
    export type AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumArtistDefaultArgs instead
     */
    export type AlbumArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumArtistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistTracksDefaultArgs instead
     */
    export type PlaylistTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistTracksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikedTracksDefaultArgs instead
     */
    export type LikedTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikedTracksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowPlaylistDefaultArgs instead
     */
    export type FollowPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowPlaylistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikedAlbumsDefaultArgs instead
     */
    export type LikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikedAlbumsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowersDefaultArgs instead
     */
    export type FollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
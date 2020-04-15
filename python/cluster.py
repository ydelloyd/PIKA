import pandas as pd
import numpy as np
import sys
from sklearn.cluster import KMeans
from sklearn.cluster import AffinityPropagation
from sklearn.cluster import MeanShift
from sklearn.cluster import SpectralClustering
from sklearn.cluster import AgglomerativeClustering
from sklearn.cluster import DBSCAN
from sklearn.cluster import OPTICS
from sklearn.mixture import GaussianMixture
from sklearn.cluster import Birch


if __name__ == '__main__':
    cluster_method = sys.argv[1]
    data_path = sys.argv[2]
    columns_path = sys.argv[3]
    if len(sys.argv) > 3:
        num_clusters = int(sys.argv[4])

    if cluster_method == 'KMeans':
        cluster_algo = KMeans(n_clusters=num_clusters)
    elif cluster_method == 'AffinityPropagation':
        cluster_algo = AffinityPropagation()
    elif cluster_method == 'MeanShift':
        cluster_algo = MeanShift()
    elif cluster_method == 'SpectralClustering':
        cluster_algo = SpectralClustering(n_clusters=num_clusters)
    elif cluster_method == 'AgglomerativeClustering':
        cluster_algo = AgglomerativeClustering(n_clusters=num_clusters)
    elif cluster_method == 'DBSCAN':
        cluster_algo = DBSCAN()
    elif cluster_method == 'OPTICS':
        cluster_algo = OPTICS()
    elif cluster_method == 'GaussianMixture':
        cluster_algo = GaussianMixture()
    elif cluster_method == 'Birch':
        cluster_algo = Birch(n_clusters=num_clusters)

    data = pd.read_csv(data_path, index_col=None)
    columns = pd.read_csv(columns_path, index_col=None)
    columns = columns['Columns'].values
    columns = np.append(['MSA', 'msa name'], columns).copy()
    data_2 = data[columns]

    cluster_out = cluster_algo.fit_predict(data_2.iloc[:, 2:])
    result = pd.DataFrame(data[['MSA', 'msa name']])
    result['cluster_number'] = cluster_out
    result.to_csv('clusters.csv')

